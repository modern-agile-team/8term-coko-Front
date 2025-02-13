export interface CosmeticItem {
  id: number;
  name: string;
  price: number;
  image: string;
  mainCategoryId: number;
  subCategoryId: number;
  category: 'clothes' | 'accessories' | 'profile' | 'color';
  isEquipped?: boolean;
}

export type CosmeticItemOption = {
  label: string;
  query: { mainCategoryId: number; subCategoryId: number | null };
};
