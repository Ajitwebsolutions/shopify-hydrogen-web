import './styles/app.css';
import type {PropsWithChildren} from 'react';
import {CartUIProvider} from './hooks/useCartState';

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <CartUIProvider>{children}</CartUIProvider>
      </body>
    </html>
  );
}
