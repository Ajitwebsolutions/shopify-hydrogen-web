import {NextResponse} from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    transport: 'next-route-handler',
    backend: 'shopify-storefront-api',
    received: body,
  });
}
