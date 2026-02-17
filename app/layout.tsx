import './styles/app.css';
import type {PropsWithChildren} from 'react';
import {CartUIProvider} from './hooks/useCartState';

export default function Layout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <CartUIProvider>{children}</CartUIProvider>
      </body>
    </html>
  );
}
