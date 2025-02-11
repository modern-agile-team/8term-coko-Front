import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';
import { create } from 'zustand';

interface State {
  isMyItemsVisible: boolean;
  query: CosmeticItemOption['query'];
  selectedCosmeticItems: CosmeticItem[];
}
interface Actions {
  toggleIsMyItemsVisible: () => void;
  setQuery: (query: State['query']) => void;
  addCosmeticItems: (cosmeticItem: CosmeticItem) => void;
  removeCosmeticItemById: (id: number) => void;
}

export const useCosmeticItemStore = create<State & Actions>((set, get) => ({
  isMyItemsVisible: false,
  query: { mainCategoryId: 1, subCategoryId: null },
  selectedCosmeticItems: [],

  toggleIsMyItemsVisible: () =>
    set(state => ({ isMyItemsVisible: !state.isMyItemsVisible })),
  setQuery: query => set(() => ({ query })),
  addCosmeticItems: cosmeticItem =>
    set(prev => {
      const isDuplicate = prev.selectedCosmeticItems.some(
        item => item.id === cosmeticItem.id
      );

      if (!isDuplicate) {
        return {
          selectedCosmeticItems: [...prev.selectedCosmeticItems, cosmeticItem],
        };
      }

      return prev;
    }),
  removeCosmeticItemById: id =>
    set(prev => ({
      selectedCosmeticItems: prev.selectedCosmeticItems.filter(
        item => item.id !== id
      ),
    })),
}));
