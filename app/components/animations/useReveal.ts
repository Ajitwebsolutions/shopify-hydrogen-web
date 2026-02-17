import {useEffect} from 'react';
import gsap from 'gsap';

export function useReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, [ref]);
}
