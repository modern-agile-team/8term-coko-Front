import { CosmeticItem } from '@/features/store/types';
import CosmeticItemCheckOut from '@/features/store/ui/CosmeticItemCheckOut';
import { userCosmeticItemsQuery } from '@/features/user/queries';
import useModal from '@/hooks/useModal';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useCosmeticItemStore } from '@/features/store/store';
import { useToggle } from '@modern-kit/react';

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
  const { mutate: purchaseItem } = userCosmeticItemsQuery.usePurchaseItem();
  const { mutate: updateEquippedItems } =
    userCosmeticItemsQuery.useUpdateEquippedItems();
  const { toggleIsMyItemsVisible } = useCosmeticItemStore();

  const [isPurchaseSuccess, toggleIsPurchaseSuccess] = useToggle(false);

  const equipItem = () => {
    updateEquippedItems({
      itemIds: [selectCosmeticItem.id],
      isEquipped: true,
    });
    closeModal();
    toggleIsMyItemsVisible();
    toggleIsPurchaseSuccess();
  };

  const purchaseItemAction = () => {
    purchaseItem(
      { itemIds: [selectCosmeticItem.id] },
      {
        onSuccess: () => {
          toast.success('아이템 구매 성공!');
          toggleIsPurchaseSuccess();
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

  const handleAccept = () => {
    if (isPurchaseSuccess) {
      equipItem();
    } else {
      purchaseItemAction();
    }
  };

  return (
    <Modal isShow={isShow}>
      <CosmeticItemCheckOut>
        <CosmeticItemCheckOut.DetailBox>
          <>
            <CosmeticItemCheckOut.StoreItem
              name={selectCosmeticItem.name}
              image={selectCosmeticItem.image}
              price={selectCosmeticItem.price}
            />

            <p>{isPurchaseSuccess ? '바로 장착하기' : `구매하기`}</p>
          </>
        </CosmeticItemCheckOut.DetailBox>
        ㅌ
        <CosmeticItemCheckOut.ConfirmButtonList
          onAccept={handleAccept}
          onReject={closeModal}
        />
      </CosmeticItemCheckOut>
    </Modal>
  );
}
