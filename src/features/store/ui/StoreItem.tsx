import type Item from '@type/Item';
import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';

export default function StoreItem({ id, name, image, category, cost }: Item) {
  return (
    <>
      <S.StoreItem key={id}>
        <S.ItemLabel>{name}</S.ItemLabel>
        <S.ItemImage $category={category} src={getImageUrl(image)} />
        <S.ItemLabel>{cost} Point</S.ItemLabel>
      </S.StoreItem>
    </>
  );
}
