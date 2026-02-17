export function loader() {
  return new Response('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
    headers: {'Content-Type': 'application/xml'},
  });
}
