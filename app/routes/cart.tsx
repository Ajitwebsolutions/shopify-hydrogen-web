import type {ActionFunctionArgs} from '@shopify/remix-oxygen';
import {json} from '@shopify/remix-oxygen';
import {useCartUI} from '~/hooks/useCartState';
import {CartLines} from '~/components/cart/CartLines.server';
import {CartSummary} from '~/components/cart/CartSummary.server';

export async function action({request}: ActionFunctionArgs) {
  const form = await request.formData();
  const lines = form.get('lines');

  return json({ok: true, lines});
}

export default function CartRoute() {
  const {setIsOpen} = useCartUI();

  return (
    <section>
      <h1>Your Cart</h1>
      <p className="lead">Manage items and continue to checkout.</p>

      <div className="stack">
        <button type="button" onClick={() => setIsOpen(true)}>
          Open cart drawer (disabled in route preview)
        </button>
      </div>

      <div className="grid-cards cart-grid">
        <article className="card">
          <h2>Items</h2>
          <CartLines />
        </article>
        <article className="card">
          <h2>Summary</h2>
          <CartSummary />
        </article>
      </div>
    </section>
  );
}
