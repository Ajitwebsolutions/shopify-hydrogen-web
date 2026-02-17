import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {CartUIProvider} from './hooks/useCartState';

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <CartUIProvider>
          <Outlet />
        </CartUIProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
