export interface CosmeticItem {
  id: number;
  name: string;
  price: number;
  image: string;
  mainCategoryId: number;
  subCategoryId: number | null;
  category: 'clothes' | 'accessories' | 'profile' | 'color';
  isEquipped?: boolean;
}

export type CosmeticItemOption = {
  label: string;
  query: Pick<CosmeticItem, 'mainCategoryId' | 'subCategoryId'>;
};
