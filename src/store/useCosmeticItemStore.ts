import { CosmeticItemOption } from '@/features/store/types';
import { create } from 'zustand';

interface State {
  isMyItemsVisible: boolean;
  query: CosmeticItemOption['query'];
}
interface Actions {
  toggleIsMyItemsVisible: () => void;
  setQuery: (query: State['query']) => void;
}

export const useCosmeticItemStore = create<State & Actions>((set, get) => ({
  isMyItemsVisible: false,
  query: { mainCategoryId: 1, subCategoryId: null },

  toggleIsMyItemsVisible: () =>
    set(state => ({ isMyItemsVisible: !state.isMyItemsVisible })),
  setQuery: query => set(() => ({ query })),
}));
