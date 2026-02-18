import {Form, useParams} from '@remix-run/react';

export default function ProductRoute() {
  const {handle} = useParams();

  return (
    <section className="product-layout">
      <div className="panel">
        <h1>Product: {handle}</h1>
        <p className="lead">A premium product page scaffold ready for storefront API data wiring.</p>
        <p>
          Price: <strong>$39.00</strong>
        </p>
      </div>

      <div className="panel">
        <h2>Add to cart</h2>
        <Form method="post" action="/cart" className="stack">
          <input type="hidden" name="lines" value={JSON.stringify([{merchandiseId: handle, quantity: 1}])} />
          <button type="submit">Add 1 item</button>
        </Form>
      </div>
    </section>
  );
}
