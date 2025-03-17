import { CosmeticItem } from '@/features/store/types';

export const isEquippedDefined = (
  item: CosmeticItem
): item is CosmeticItem & { isEquipped: boolean } => {
  return typeof item.isEquipped === 'boolean';
};
