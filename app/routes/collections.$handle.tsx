import {Link, useParams} from '@remix-run/react';

const collectionProducts = [
  {title: 'Classic Tee', handle: 'classic-tee', price: '$39.00'},
  {title: 'Performance Hoodie', handle: 'performance-hoodie', price: '$79.00'},
  {title: 'Relaxed Cap', handle: 'relaxed-cap', price: '$24.00'},
];

export default function CollectionRoute() {
  const {handle} = useParams();

  return (
    <section>
      <h1>Collection: {handle}</h1>
      <p className="lead">Explore curated products for this collection.</p>

      <div className="grid-cards">
        {collectionProducts.map((product) => (
          <article key={product.handle} className="card">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link to={`/products/${product.handle}`}>View product</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
