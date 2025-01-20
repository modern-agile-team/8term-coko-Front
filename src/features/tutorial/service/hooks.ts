import React, { useState, useCallback } from 'react';

type rects = Record<string, DOMRect>;
export const usePosition = () => {
  const [rects, setRects] = useState<rects>({});

  // refCallback 생성
  const getClientRectRefCallback = useCallback(
    <T extends HTMLElement>(node: T | null) => {
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const id = node.id;
      setRects(prev => ({
        ...prev,
        [id]: rect,
      }));
    },
    []
  );

  const getPosition = useCallback((id: string) => rects[id] || null, [rects]);

  return { rects, getClientRectRefCallback, getPosition };
};
