import {getCartLines} from '../../lib/shopify/storefront';

export async function CartLines() {
  const lines = await getCartLines();

  if (!lines.length) return <p>Your cart is currently empty.</p>;

  return (
    <ul>
      {lines.map((line) => (
        <li key={line.id}>
          {line.title} × {line.quantity}
        </li>
      ))}
    </ul>
  );
}
