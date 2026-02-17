import {useFetcher} from '@remix-run/react';

export function useCartMutations() {
  const fetcher = useFetcher();

  function addLine(merchandiseId: string, quantity = 1) {
    fetcher.submit(
      {lines: JSON.stringify([{merchandiseId, quantity}])},
      {method: 'post', action: '/cart'},
    );
  }

  return {
    addLine,
    isLoading: fetcher.state !== 'idle',
  };
}
