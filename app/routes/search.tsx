import {Form, Link, useSearchParams} from '@remix-run/react';

const catalog = [
  {title: 'Classic Tee', handle: 'classic-tee'},
  {title: 'Performance Hoodie', handle: 'performance-hoodie'},
  {title: 'Relaxed Cap', handle: 'relaxed-cap'},
  {title: 'Travel Bottle', handle: 'travel-bottle'},
];

export default function SearchRoute() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const normalizedQuery = query.toLowerCase();

  const results = normalizedQuery
    ? catalog.filter((item) => item.title.toLowerCase().includes(normalizedQuery))
    : catalog;

  return (
    <section>
      <h1>Search</h1>
      <Form method="get" className="search-form">
        <input name="q" defaultValue={query} placeholder="Search products" aria-label="Search products" />
        <button type="submit">Search</button>
      </Form>

      <p className="muted">{results.length} result(s) found</p>

      <ul className="result-list">
        {results.map((item) => (
          <li key={item.handle}>
            <Link to={`/products/${item.handle}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
