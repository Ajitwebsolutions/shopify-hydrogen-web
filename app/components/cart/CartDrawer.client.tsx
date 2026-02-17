'use client';

import {AnimatePresence} from 'framer-motion';
import {useCartUI} from '../../hooks/useCartState';
import {AnimatedDrawer} from '../animations/useCartDrawerAnimation';
import {CartLines} from './CartLines.server';
import {CartSummary} from './CartSummary.server';

export function CartDrawer() {
  const {isOpen, setIsOpen} = useCartUI();

  return (
    <AnimatePresence>
      {isOpen ? (
        <AnimatedDrawer>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close cart drawer">
            Close
          </button>
          <CartLines />
          <CartSummary />
        </AnimatedDrawer>
      ) : null}
    </AnimatePresence>
  );
}
