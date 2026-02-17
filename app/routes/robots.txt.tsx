export function loader() {
  return new Response('User-agent: *\nAllow: /', {
    headers: {'Content-Type': 'text/plain'},
  });
}
