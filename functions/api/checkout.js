import Stripe from 'stripe';

const PRODUCTS = {
  work: {
    name: 'Work Kit',
    fullPrice: 249,
    items: {
      'atomoxetine':     { name: 'Atomoxetine 40mg',          price: 39 },
      'gunfacine':       { name: 'Gunfacine 1mg/ml',          price: 45 },
      '9mbc':            { name: '9-MBC 10mg',                price: 32 },
      'phenylpiracetam': { name: 'Phenylpiracetam 100mg',     price: 28 },
      'noopept':         { name: 'Noopept 30mg',              price: 22 },
      'ldopa':           { name: 'L-Dopa 200mg',              price: 18 },
      '4f-modafinil':    { name: '4F-Modafinil 50mg',         price: 42 },
      'speciosa-work':   { name: 'Speciosa Replacement Blend', price: 29 },
    },
  },
  rest: {
    name: 'Rest Kit',
    fullPrice: 149,
    items: {
      'nuciferine':    { name: 'Nuciferine 20mg',             price: 24 },
      '2mxl':          { name: '2MXL 10ml spray',             price: 28 },
      'kanna':         { name: 'Kanna 10ml spray',            price: 22 },
      'rape':          { name: 'Rapé 5g',                     price: 18 },
      'ashwagandha':   { name: 'Ashwagandha 300mg',           price: 16 },
      '4f-phenibut':   { name: '4F-Phenibut 250mg',           price: 20 },
      'speciosa-rest': { name: 'Speciosa Replacement Blend',  price: 25 },
    },
  },
};

export async function onRequestPost(context) {
  const { env, request } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { kitId, selectedItems } = await request.json();

    const kit = PRODUCTS[kitId];
    if (!kit) {
      return Response.json(
        { error: 'Unknown kit' },
        { status: 400, headers: corsHeaders },
      );
    }

    const validItems = (selectedItems || []).filter(id => kit.items[id]);
    if (validItems.length === 0) {
      return Response.json(
        { error: 'No valid items selected' },
        { status: 400, headers: corsHeaders },
      );
    }

    const allSelected = validItems.length === Object.keys(kit.items).length;

    let lineItems;
    if (allSelected) {
      lineItems = [{
        price_data: {
          currency: 'eur',
          product_data: { name: `${kit.name} (Complete)` },
          unit_amount: kit.fullPrice * 100,
        },
        quantity: 1,
      }];
    } else {
      lineItems = validItems.map(id => ({
        price_data: {
          currency: 'eur',
          product_data: { name: kit.items[id].name },
          unit_amount: kit.items[id].price * 100,
        },
        quantity: 1,
      }));
    }

    const origin = new URL(request.url).origin;

    const stripe = new Stripe(env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
      metadata: {
        kit: kitId,
        items: validItems.join(','),
      },
    });

    return Response.json({ url: session.url }, { headers: corsHeaders });
  } catch (err) {
    console.error('Checkout error:', err);
    return Response.json(
      { error: 'Failed to create checkout session' },
      { status: 500, headers: corsHeaders },
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
