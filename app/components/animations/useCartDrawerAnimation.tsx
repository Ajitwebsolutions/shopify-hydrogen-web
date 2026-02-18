import {motion} from 'framer-motion';
import type {PropsWithChildren} from 'react';

export function AnimatedDrawer({children}: PropsWithChildren) {
  return (
    <motion.aside
      initial={{x: '100%'}}
      animate={{x: 0}}
      exit={{x: '100%'}}
      transition={{type: 'spring', stiffness: 260, damping: 24}}
      data-cart-drawer="true"
      aria-label="Shopping cart drawer"
    >
      {children}
    </motion.aside>
  );
}
