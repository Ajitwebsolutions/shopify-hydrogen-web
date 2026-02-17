import {getCartSummary} from '../../lib/shopify/storefront';

export async function CartSummary() {
  const summary = await getCartSummary();

  return (
    <section aria-label="Cart summary">
      <p>Subtotal: {summary.subtotal}</p>
      <a href={summary.checkoutUrl}>Checkout</a>
    </section>
  );
}
