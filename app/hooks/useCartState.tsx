'use client';

import {createContext, useContext, useMemo, useState} from 'react';
import type {PropsWithChildren} from 'react';

type CartUIContextValue = {
  isOpen: boolean;
  setIsOpen: (next: boolean) => void;
};

const CartUIContext = createContext<CartUIContextValue | null>(null);

export function CartUIProvider({children}: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({isOpen, setIsOpen}), [isOpen]);
  return <CartUIContext.Provider value={value}>{children}</CartUIContext.Provider>;
}

export function useCartUI() {
  const context = useContext(CartUIContext);
  if (!context) throw new Error('useCartUI must be used within CartUIProvider');
  return context;
}
