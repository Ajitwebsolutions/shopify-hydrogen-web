export function CartSummary({subtotal = '$0.00'}: {subtotal?: string}) {
  return (
    <section aria-label="Cart summary">
      <p>Subtotal: {subtotal}</p>
      <button type="button">Checkout</button>
    </section>
  );
}
