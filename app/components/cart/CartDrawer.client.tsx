import {AnimatePresence} from 'framer-motion';
import {useCartUI} from '~/hooks/useCartState';
import {AnimatedDrawer} from '../animations/useCartDrawerAnimation';

export function CartDrawer() {
  const {isOpen, setIsOpen} = useCartUI();

  return (
    <AnimatePresence>
      {isOpen ? (
        <AnimatedDrawer>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close cart drawer">
            Close
          </button>
          <section className="stack">
            <h2>Cart Drawer</h2>
            <p>Your cart items appear here.</p>
            <p>Subtotal: $0.00</p>
            <button type="button">Checkout</button>
          </section>
        </AnimatedDrawer>
      ) : null}
    </AnimatePresence>
  );
}
