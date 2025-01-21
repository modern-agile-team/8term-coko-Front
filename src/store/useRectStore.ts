import { rects } from '@/features/tutorial/types';
import { create } from 'zustand';

interface State {
  rects: rects;
}

interface Action {
  setRect: (id: string, rect: DOMRect) => void;
  getRectById: (id: string) => DOMRect | null;
}
export const useRectStore = create<State & Action>((set, get) => ({
  rects: {},
  setRect: (id, rect) =>
    set(state => ({
      rects: {
        ...state.rects,
        [id]: rect,
      },
    })),
  getRectById: id => {
    const { rects } = get();
    if (!rects[id]) return null;
    return rects[id];
  },
}));
