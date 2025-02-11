import * as S from './styles';
import StoreItem from './StoreItem';
import type { CosmeticItem } from '@features/store/types';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
import { useMemo } from 'react';
import useModal from '@/hooks/useModal';
import CosmeticItemCheckOut from '@/features/store/ui/CosmeticItemCheckOut';

interface CartListProps {
  isMobileHidden: boolean;
}
export default function CartList({ isMobileHidden }: CartListProps) {
  const { selectedCosmeticItems, removeCosmeticItemById } =
    useCosmeticItemStore();
  const totalPoint = useMemo(() => {
    return selectedCosmeticItems.reduce((total, item) => total + item.price, 0);
  }, [selectedCosmeticItems]);
  const { Modal, isShow, closeModal, openModal } = useModal();

  return (
    <>
      <Modal isShow={isShow} outSideClickCallback={closeModal}>
        <CosmeticItemCheckOut>
          <CosmeticItemCheckOut.DetailBox>
            <>
              <StoreItem>총 금액 ㅁㄴㅇㅁㄴㅇㄴㅇㅁ포인트</StoreItem>
              <p>구매할래?</p>
            </>
          </CosmeticItemCheckOut.DetailBox>
          <CosmeticItemCheckOut.ConfirmButtonList
            onAccept={() => {}}
            onReject={() => {}}
          />
        </CosmeticItemCheckOut>
      </Modal>
      <S.CartListWrapper $isMobileHidden={isMobileHidden}>
        <label>장바구니</label>
        <S.CartListItemWrapper>
          {selectedCosmeticItems.map(item => (
            <StoreItem key={item.id}>
              <StoreItem.Header
                name={item.name}
                onRemove={() => removeCosmeticItemById(item.id)}
              />
              <StoreItem.Image image={item.image} />
              <StoreItem.Footer>
                <label>{item.price} Point</label>
              </StoreItem.Footer>
            </StoreItem>
          ))}
        </S.CartListItemWrapper>
        <button onClick={openModal}>총 {totalPoint}포인트</button>
      </S.CartListWrapper>
    </>
  );
}
