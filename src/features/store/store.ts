import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';
import { create } from 'zustand';

interface State {
  isMyItemsVisible: boolean;
  query: CosmeticItemOption['query'];
  currentPage: number;
  cartListCosmeticItems: CosmeticItem[];
  equippedCosmeticItems: Record<number, { image: string }>;
}
interface Actions {
  toggleIsMyItemsVisible: () => void;
  setQuery: (query: State['query']) => void;
  cartListAddCosmeticItems: (cosmeticItem: CosmeticItem) => void;
  removeCosmeticItemById: (id: number) => void;
  toggleEquippedCosmeticItems: ({
    subCategoryId,
    image,
  }: {
    subCategoryId: number;
    image: string;
  }) => void;
  resetEquippedItem: () => void;
  setCurrentPage: (currentPage: number) => void;
  resetCartList: () => void;
}

export const useCosmeticItemStore = create<State & Actions>((set, get) => ({
  isMyItemsVisible: false,
  query: { mainCategoryId: 0, subCategoryId: null },
  cartListCosmeticItems: [],
  equippedCosmeticItems: {},
  currentPage: 1,

  toggleIsMyItemsVisible: () =>
    set(state => ({ isMyItemsVisible: !state.isMyItemsVisible })),
  setQuery: query => set(() => ({ query })),
  cartListAddCosmeticItems: cosmeticItem =>
    set(prev => {
      const isDuplicate = prev.cartListCosmeticItems.some(
        item => item.id === cosmeticItem.id
      );

      if (!isDuplicate) {
        return {
          cartListCosmeticItems: [...prev.cartListCosmeticItems, cosmeticItem],
        };
      }

      return prev;
    }),
  resetCartList: () => set(() => ({ cartListCosmeticItems: [] })),
  removeCosmeticItemById: id =>
    set(prev => ({
      cartListCosmeticItems: prev.cartListCosmeticItems.filter(
        item => item.id !== id
      ),
    })),
  toggleEquippedCosmeticItems: ({ subCategoryId, image }) =>
    set(state => {
      const { [subCategoryId]: existingItem, ...restItems } =
        state.equippedCosmeticItems;

      if (existingItem && existingItem.image === image) {
        return {
          equippedCosmeticItems: restItems,
        };
      }

      return {
        equippedCosmeticItems: {
          ...state.equippedCosmeticItems,
          [subCategoryId]: { image },
        },
      };
    }),

  resetEquippedItem: () => set(() => ({ equippedCosmeticItems: {} })),
  setCurrentPage: currentPage => set(() => ({ currentPage })),
}));
