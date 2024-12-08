import type Item from '@/types/CosmeticItem ';
import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';

export default function StoreItem({ name, image, category, cost }: Item) {
  return (
    <S.StoreItem>
      <S.ItemLabel>{name}</S.ItemLabel>
      <S.ItemImage $category={category} src={getImageUrl(image)} />
      <S.ItemLabel>{cost} Point</S.ItemLabel>
    </S.StoreItem>
  );
}
