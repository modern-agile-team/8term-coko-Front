interface CosmeticItem {
  id: number;
  name: string;
  cost: number;
  image: string;
  category: 'clothes' | 'accessories' | 'profile' | 'color';
}
export default CosmeticItem;
