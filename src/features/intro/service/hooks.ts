import { useCallback } from 'react';
import { useRectStore } from '@store/useRectStore';

export const useElementRect = () => {
  const { setRect } = useRectStore();

  // refCallback 생성
  const getClientRectRefCallback = useCallback(
    <T extends HTMLElement>(node: T | null) => {
      if (!node) return;
      requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();

        const id = node.id;
        setRect(id, rect);
      });
    },
    []
  );

  return { getClientRectRefCallback };
};
