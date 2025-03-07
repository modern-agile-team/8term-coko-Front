export interface CosmeticItem {
  id: number;
  name: string;
  price: number;
  image: string;
  mainCategoryId: number;
  subCategoryId: number;
  isEquipped?: boolean;
}

export type CosmeticItemOption = {
  label: string;
  query: { mainCategoryId: number; subCategoryId: number | null };
};

export interface PaginationCosmeticItem {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  contents: CosmeticItem[];
}

type CosmeticItemsQueryParams = CosmeticItemOption['query'] & {
  page: number;
  limit: number;
};

export type ProfileImageSize = 'lg' | 'md' | 'sm';
