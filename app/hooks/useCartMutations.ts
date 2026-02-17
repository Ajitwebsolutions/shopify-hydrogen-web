'use client';

import {useTransition} from 'react';

type AddLineInput = {merchandiseId: string; quantity?: number};

export function useCartMutations() {
  const [isPending, startTransition] = useTransition();

  function addLine(input: AddLineInput) {
    startTransition(async () => {
      await fetch('/api/cart', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({action: 'ADD_LINES', lines: [{...input, quantity: input.quantity ?? 1}]}),
      });
    });
  }

  return {addLine, isLoading: isPending};
}
