'use client';

import {motion} from 'framer-motion';
import type {PropsWithChildren} from 'react';

export function AnimatedDrawer({children}: PropsWithChildren) {
  return (
    <motion.aside
      initial={{x: '100%'}}
      animate={{x: 0}}
      exit={{x: '100%'}}
      transition={{type: 'spring', stiffness: 260, damping: 24}}
      className="fixed right-0 top-0 h-full w-[420px] max-w-full bg-white shadow-2xl"
      aria-label="Shopping cart drawer"
    >
      {children}
    </motion.aside>
  );
}
