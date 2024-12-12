import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import CosmeticItem from '@type/CosmeticItem ';

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
      <S.ItemLabel>{cost} Point</S.ItemLabel>
    </S.StoreItem>
  );
}
