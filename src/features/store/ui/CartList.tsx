import * as S from './styles';
import StoreItem from './StoreItem';
import type { CosmeticItem } from '@features/store/types';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';

interface CartListProps {
  isMobileHidden: boolean;
}
export default function CartList({ isMobileHidden }: CartListProps) {
  const { selectedCosmeticItems, removeCosmeticItemById } =
    useCosmeticItemStore();

  return (
    <>
      <S.CartListWrapper $isMobileHidden={isMobileHidden}>
        <label>장바구니</label>
        <S.CartListItemWrapper>
          {selectedCosmeticItems.map(item => (
            <StoreItem
              key={item.id}
              onClick={() => {
                console.log('이거입어', item);
              }}
            >
              <StoreItem.Header
                name={item.name}
                onRemove={() => removeCosmeticItemById(item.id)}
              />
              <StoreItem.Image image={item.image} />
              <StoreItem.Footer>
                <label>{item.price}</label>
              </StoreItem.Footer>
            </StoreItem>
          ))}
        </S.CartListItemWrapper>
        <label>총 1500포인트</label>
      </S.CartListWrapper>
    </>
  );
}
