import type {ActionFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {CartDrawer} from '~/components/cart/CartDrawer.client';

export async function action({request}: ActionFunctionArgs) {
  const form = await request.formData();
  const lines = form.get('lines');

  return json({ok: true, lines});
}

export default function CartRoute() {
  return <CartDrawer />;
}
