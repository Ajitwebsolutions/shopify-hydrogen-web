'use client';

import {useEffect} from 'react';

export function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.opacity = '1';
    ref.current.style.transform = 'translateY(0)';
  }, [ref]);
}
