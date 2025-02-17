import { CosmeticItem } from '@/features/store/types';
import CosmeticItemCheckOut from '@/features/store/ui/CosmeticItemCheckOut';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import useModal from '@/hooks/useModal';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import useFunnel from './../../../hooks/useFunnel';
import { useState } from 'react';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';

interface PurchaseModalProps {
  selectCosmeticItem: CosmeticItem;
  isShow: boolean;
  closeModal: () => void;
}

export default function PurchaseModal({
  selectCosmeticItem,
  closeModal,
  isShow,
}: PurchaseModalProps) {
  const { Modal } = useModal();
  const { mutate: purchaseItem } = useUserCosmeticItemsQuery.purchaseItem();
  const { mutate: updateEquippedItems } =
    useUserCosmeticItemsQuery.updateEquippedItems();
  const [isSuccess, setIsSuccess] = useState(false);
  const { toggleIsMyItemsVisible } = useCosmeticItemStore();

  const handleAccept = () => {
    if (isSuccess) {
      updateEquippedItems({
        itemIds: [selectCosmeticItem.id],
        isEquipped: true,
      });
      closeModal();
      return;
    }
    purchaseItem(
      { itemIds: [selectCosmeticItem.id] },
      {
        onSuccess: () => {
          toast.success('아이템 구매 성공!');
          setIsSuccess(true);
          toggleIsMyItemsVisible();
        },
        onError: error => {
          if (isAxiosError(error)) {
            if (error.response?.status === 401) {
              toast.error('로그인이 필요한 작업입니다.');
            }
            if (error.response?.status === 400) {
              toast.error(error.response.data.message);
            }
          }
        },
      }
    );
  };

  return (
    <Modal isShow={isShow} outSideClickCallback={closeModal}>
      <CosmeticItemCheckOut>
        <CosmeticItemCheckOut.DetailBox>
          <>
            <CosmeticItemCheckOut.StoreItem
              name={selectCosmeticItem.name}
              image={selectCosmeticItem.image}
              price={selectCosmeticItem.price}
            />

            <p>{isSuccess ? '바로 장착할래?' : '구매할래?'}</p>
          </>
        </CosmeticItemCheckOut.DetailBox>
        <CosmeticItemCheckOut.ConfirmButtonList
          onAccept={handleAccept}
          onReject={closeModal}
        />
      </CosmeticItemCheckOut>
    </Modal>
  );
}
