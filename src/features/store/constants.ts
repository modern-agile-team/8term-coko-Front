import { CosmeticItemOption } from '@/features/store/types';

export const CLOTHES_OPTIONS: CosmeticItemOption[] = [
  { label: '의상', query: { mainCategoryId: 1, subCategoryId: null } },
  { label: '셋업', query: { mainCategoryId: 1, subCategoryId: 1 } },
  { label: '신발', query: { mainCategoryId: 1, subCategoryId: 2 } },
];
export const ACCESSORIES_OPTIONS: CosmeticItemOption[] = [
  { label: '악세사리', query: { mainCategoryId: 2, subCategoryId: null } },
  { label: '모자', query: { mainCategoryId: 2, subCategoryId: 3 } },
  { label: '안경', query: { mainCategoryId: 2, subCategoryId: 4 } },
  { label: '턱수염', query: { mainCategoryId: 2, subCategoryId: 5 } },
  { label: '스카프', query: { mainCategoryId: 2, subCategoryId: 6 } },
];

export const BUTTON_LIST: CosmeticItemOption[] = [
  {
    label: '프로필',
    query: { mainCategoryId: 3, subCategoryId: 7 },
  },
  {
    label: '색상',
    query: { mainCategoryId: 4, subCategoryId: 8 },
  },
];
