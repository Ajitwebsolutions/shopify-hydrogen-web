export function GET() {
  return new Response('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
    headers: {'content-type': 'application/xml'},
  });
}
