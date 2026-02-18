import {Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration} from '@remix-run/react';
import {CartUIProvider} from './hooks/useCartState';
import appStyles from './styles/app.css';

export const links = () => [{rel: 'stylesheet', href: appStyles}];

function LayoutShell() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" end>
            Hydrogen Store
          </NavLink>
          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/collections/summer-essentials">Collections</NavLink>
            <NavLink to="/products/classic-tee">Products</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </nav>
        </div>
      </header>

      <main className="container page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">Built with Hydrogen + Remix</div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <CartUIProvider>
          <LayoutShell />
        </CartUIProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
