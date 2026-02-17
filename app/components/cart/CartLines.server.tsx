type CartLine = {
  id: string;
  title: string;
  quantity: number;
};

const fallbackLines: CartLine[] = [];

export function CartLines({lines = fallbackLines}: {lines?: CartLine[]}) {
  if (!lines.length) {
    return <p>Your cart is currently empty.</p>;
  }

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
