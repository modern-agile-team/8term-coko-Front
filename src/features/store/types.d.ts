export interface CosmeticItem {
  id: number;
  name: string;
  cost: number;
  image: string;
  category: 'clothes' | 'accessories' | 'profile' | 'color';
}

export type CosmeticItemOption = { label: string; value: string };
