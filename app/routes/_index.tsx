import {fetchHomepageProducts} from '../lib/shopify/storefront';

export default async function HomePage() {
  const products = await fetchHomepageProducts();

  return (
    <main>
      <h1>Headless Shopify Storefront</h1>
      <p>Powered by Next.js + Storefront API + Sanity CMS.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}
