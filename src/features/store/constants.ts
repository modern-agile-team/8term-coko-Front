import { CosmeticItemOption } from '@/features/store/types';
import {
  CharacterBeard,
  CharacterGlasses,
  CharacterHat,
  CharacterSetup,
  CharacterShoes,
} from '@/features/user/ui/styles';

export const CLOTHES_OPTIONS = [
  { label: '의상', query: { mainCategoryId: 1, subCategoryId: 0 } },
  { label: '셋업', query: { mainCategoryId: 1, subCategoryId: 1 } },
  { label: '신발', query: { mainCategoryId: 1, subCategoryId: 2 } },
] as const;
export const ACCESSORIES_OPTIONS: CosmeticItemOption[] = [
  { label: '악세사리', query: { mainCategoryId: 2, subCategoryId: 0 } },
  { label: '모자', query: { mainCategoryId: 2, subCategoryId: 3 } },
  { label: '안경', query: { mainCategoryId: 2, subCategoryId: 4 } },
  { label: '스카프', query: { mainCategoryId: 2, subCategoryId: 6 } },
];

export const BUTTON_LIST = [
  {
    label: '프로필',
    query: { mainCategoryId: 3, subCategoryId: 7 },
  },
  {
    label: '색상',
    query: { mainCategoryId: 4, subCategoryId: 8 },
  },
] as const;

export const COSMETIC_COMPONENTS = {
  1: CharacterSetup,
  2: CharacterShoes,
  3: CharacterHat,
  4: CharacterGlasses,
  5: CharacterBeard,
} as const;
