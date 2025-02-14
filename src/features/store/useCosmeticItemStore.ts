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
    subCategoryid,
    image,
  }: {
    subCategoryid: number;
    image: string;
  }) => void;
  resetEquippedItem: () => void;
  setCurrentPage: (currentPage: number) => void;
}

export const useCosmeticItemStore = create<State & Actions>((set, get) => ({
  isMyItemsVisible: false,
  query: { mainCategoryId: 1, subCategoryId: 6 },
  cartListCosmeticItems: [],
  equippedCosmeticItems: {},
  currentPage: 0,

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
  removeCosmeticItemById: id =>
    set(prev => ({
      cartListCosmeticItems: prev.cartListCosmeticItems.filter(
        item => item.id !== id
      ),
    })),
  toggleEquippedCosmeticItems: ({ subCategoryid, image }) =>
    set(state => {
      const { [subCategoryid]: existingItem, ...restItems } =
        state.equippedCosmeticItems;

      if (existingItem && existingItem.image === image) {
        return {
          equippedCosmeticItems: restItems,
        };
      }

      return {
        equippedCosmeticItems: {
          ...state.equippedCosmeticItems,
          [subCategoryid]: { image },
        },
      };
    }),

  resetEquippedItem: () => set(() => ({ equippedCosmeticItems: {} })),
  setCurrentPage: currentPage => set(() => ({ currentPage })),
}));
