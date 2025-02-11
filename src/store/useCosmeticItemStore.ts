import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';
import { create } from 'zustand';

interface State {
  isMyItemsVisible: boolean;
  query: CosmeticItemOption['query'];
  selectedCosmeticItems: CosmeticItem[];
  equippedItems: Record<number, { image: string }>;
}
interface Actions {
  toggleIsMyItemsVisible: () => void;
  setQuery: (query: State['query']) => void;
  addCosmeticItems: (cosmeticItem: CosmeticItem) => void;
  removeCosmeticItemById: (id: number) => void;
  toggleEquippedItem: (id: number, image: string) => void;
  resetEquippedItem: () => void;
}

export const useCosmeticItemStore = create<State & Actions>((set, get) => ({
  isMyItemsVisible: false,
  query: { mainCategoryId: 1, subCategoryId: null },
  selectedCosmeticItems: [],
  equippedItems: {},

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
  toggleEquippedItem: (id, image) =>
    set(state => {
      const { [id]: existingItem, ...restItems } = state.equippedItems;

      return {
        equippedItems: existingItem
          ? restItems
          : {
              ...state.equippedItems,
              [id]: { image },
            },
      };
    }),
  resetEquippedItem: () => set(() => ({ equippedItems: {} })),
}));
