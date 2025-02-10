import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';

export const CLOTHES_OPTIONS: CosmeticItemOption[] = [
  { label: '의상', value: 'clothes' },
  { label: '셋업', value: 'setup' },
  { label: '신발', value: 'shoes' },
] as const;

export type ClothesOptionValue = (typeof CLOTHES_OPTIONS)[number]['value'];

export const ACCESSPRIES_OPTIONS: CosmeticItemOption[] = [
  { label: '악세사리', value: 'accessories' },
  { label: '모자', value: 'hat' },
  { label: '안경', value: 'glasses' },
  { label: '턱수염', value: 'beard' },
  { label: '스카프', value: 'scarf' },
] as const;

export type AccessoriesOptionValue =
  (typeof ACCESSPRIES_OPTIONS)[number]['value'];

export const BUTTION_LIST: { label: string; name: CosmeticItem['category'] }[] =
  [
    {
      label: '프로필',
      name: 'profile',
    },
    {
      label: '색상',
      name: 'color',
    },
  ] as const;
