import * as S from './styles';
import StoreItem from './StoreItem';
import type { CosmeticItem } from '@features/store/types';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
import { useMemo } from 'react';
import useModal from '@/hooks/useModal';
import CosmeticItemCheckOut from '@/features/store/ui/CosmeticItemCheckOut';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

interface CartListProps {
  isMobileHidden: boolean;
}
export default function CartList({ isMobileHidden }: CartListProps) {
  const { selectedCosmeticItems, removeCosmeticItemById } =
    useCosmeticItemStore();

  const { Modal, isShow, closeModal, openModal } = useModal();
  const { mutate: purchaseItem } = useUserCosmeticItemsQuery.purchaseItem();

  const totalPoint = useMemo(() => {
    return selectedCosmeticItems.reduce((total, item) => total + item.price, 0);
  }, [selectedCosmeticItems]);

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
            onAccept={() => {
              purchaseItem(
                {
                  itemIds: selectedCosmeticItems.map(item => item.id),
                },
                {
                  onSuccess: () => {
                    toast.success('아이템 구매 성공!');
                    closeModal();
                  },
                  onError: error => {
                    if (isAxiosError(error)) {
                      if (error.response?.status === 401) {
                        toast.error('로그인이 필요한 작업입니다.');
                      }
                    }
                  },
                }
              );
            }}
            onReject={closeModal}
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
