import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';
import { create } from 'zustand';

interface State {
  isMyItemsVisible: boolean;
  query: CosmeticItemOption['query'];
  cartListCosmeticItems: CosmeticItem[];
  equippedCosmeticItems: Record<
    number,
    { image: string; cosmeticItemId: number }
  >;
}
interface Actions {
  toggleIsMyItemsVisible: () => void;
  setQuery: (query: State['query']) => void;
  cartListAddCosmeticItems: (cosmeticItem: CosmeticItem) => void;
  removeCosmeticItemById: (id: number) => void;
  toggleEquippedCosmeticItems: ({
    subOrMainCategoryid,
    image,
    cosmeticItemId,
  }: {
    subOrMainCategoryid: number;
    image: string;
    cosmeticItemId: number;
  }) => void;
  resetEquippedItem: () => void;
}

export const useCosmeticItemStore = create<State & Actions>((set, get) => ({
  isMyItemsVisible: false,
  query: { mainCategoryId: 1, subCategoryId: null },
  cartListCosmeticItems: [],
  equippedCosmeticItems: {},

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
  toggleEquippedCosmeticItems: ({
    subOrMainCategoryid,
    image,
    cosmeticItemId,
  }) =>
    set(state => {
      const { [subOrMainCategoryid]: existingItem, ...restItems } =
        state.equippedCosmeticItems;

      if (existingItem && existingItem.cosmeticItemId === cosmeticItemId) {
        return {
          equippedCosmeticItems: restItems,
        };
      }

      return {
        equippedCosmeticItems: {
          ...state.equippedCosmeticItems,
          [subOrMainCategoryid]: { image, cosmeticItemId },
        },
      };
    }),

  resetEquippedItem: () => set(() => ({ equippedCosmeticItems: {} })),
}));
