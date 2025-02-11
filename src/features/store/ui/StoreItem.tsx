import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import type { CosmeticItem } from '@features/store/types';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';

interface StoreItemProps {
  cosmeticItem: CosmeticItem;
  isCartList: boolean;
}

export default function StoreItem({
  cosmeticItem,
  isCartList,
}: StoreItemProps) {
  const { addCosmeticItems, removeCosmeticItemById } = useCosmeticItemStore();

  return (
    <S.StoreItem>
      <div>
        <S.ItemLabel>{cosmeticItem.name}</S.ItemLabel>
        {isCartList && (
          <span onClick={() => removeCosmeticItemById(cosmeticItem.id)}>X</span>
        )}
      </div>

      <S.ItemImage src={getImageUrl(cosmeticItem.image)} />
      <div>
        <S.ItemLabel>{cosmeticItem.price} Point</S.ItemLabel>
        {isCartList || (
          <>
            <p onClick={() => addCosmeticItems(cosmeticItem)}>V</p>
            {/* <img src={getImageUrl('구매')} /> */}
            <img src={getImageUrl('장바구니추가')} />
          </>
        )}
      </div>
    </S.StoreItem>
  );
}
