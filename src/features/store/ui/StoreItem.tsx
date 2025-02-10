import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import type { CosmeticItem } from '@features/store/types';

export default function StoreItem({
  name,
  image,
  category,
  cost,
}: CosmeticItem) {
  return (
    <S.StoreItem>
      <S.ItemLabel>{name}</S.ItemLabel>
      <S.ItemImage $category={category} src={getImageUrl(image)} />
      <div>
        <S.ItemLabel>{cost} Point</S.ItemLabel>
        <img src={getImageUrl('구매')} />
        <img src={getImageUrl('장바구니추가')} />
      </div>
    </S.StoreItem>
  );
}
