import * as S from './styles';
import { useState } from 'react';
import StoreItem from './StoreItem';
import { CosmeticItem } from '@/features/store/types';
import withCosmeticItem from '@/features/store/hocs/withCosmeticItem';
import { getImageUrl } from '@/utils/getImageUrl';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
import { EquipButton } from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import CosmeticItemCheckOut from '@/features/store/ui/CosmeticItemCheckOut';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import toast from 'react-hot-toast';
import { isAxiosError } from 'axios';

interface ItemContainerProps {
  cosmeticItem: CosmeticItem[];
}

function ItemContainer({ cosmeticItem }: ItemContainerProps) {
  const {
    cartListAddCosmeticItems,
    isMyItemsVisible,
    toggleEquippedCosmeticItems,
  } = useCosmeticItemStore();

  const [selectedItem, setSelectedItem] = useState<CosmeticItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>();

  const { Modal, isShow, openModal, closeModal } = useModal();
  const { mutate: purchaseItem } = useUserCosmeticItemsQuery.purchaseItem();
  const { mutate: updateEquippedItems } =
    useUserCosmeticItemsQuery.updateEquippedItems();

  const handleEquipPreview = (item: CosmeticItem) => {
    if (!isMyItemsVisible) {
      toggleEquippedCosmeticItems({
        subCategoryid: item.subCategoryId,
        image: item.image,
      });
    }
  };

  return (
    <>
      <Modal isShow={isShow} outSideClickCallback={closeModal}>
        {selectedItem && (
          <CosmeticItemCheckOut>
            <CosmeticItemCheckOut.DetailBox>
              <>
                <CosmeticItemCheckOut.StoreItem
                  name={selectedItem.name}
                  image={selectedItem.image}
                  price={selectedItem.price}
                />

                <p>구매할래?</p>
              </>
            </CosmeticItemCheckOut.DetailBox>
            <CosmeticItemCheckOut.ConfirmButtonList
              onAccept={() => {
                purchaseItem(
                  { itemIds: [selectedItem.id] },
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
                        if (error.response?.status === 400) {
                          toast.error('포인트가 부족해요!');
                        }
                      }
                    },
                    onSettled: () => closeModal(),
                  }
                );
              }}
              onReject={closeModal}
            />
          </CosmeticItemCheckOut>
        )}
      </Modal>
      <S.ItemContainer>
        {cosmeticItem.map(item => (
          <StoreItem key={item.id} onClick={() => handleEquipPreview(item)}>
            <StoreItem.Header name={item.name} />
            <StoreItem.Image image={item.image} />
            <StoreItem.Footer>
              {isMyItemsVisible ? (
                <EquipButton
                  onClick={() => {
                    updateEquippedItems({
                      itemIds: [item.id],
                      isEquipped: !item.isEquipped,
                    });
                  }}
                >
                  {item.isEquipped ? '해제' : '장착'}
                </EquipButton>
              ) : (
                <>
                  <label>{item.price} Point</label>
                  <img
                    src={getImageUrl('')}
                    alt="장바구니넣기"
                    onClick={e => {
                      e.stopPropagation();
                      cartListAddCosmeticItems(item);
                    }}
                  />
                  <img
                    src={getImageUrl('')}
                    alt="구매"
                    onClick={e => {
                      setSelectedItem(item);
                      e.stopPropagation();
                      openModal();
                    }}
                  />
                </>
              )}
            </StoreItem.Footer>
          </StoreItem>
        ))}
      </S.ItemContainer>
      {/* 추후 하드코딩 수정 */}
      <S.PaginationDiv>
        {[1, 2, 3, 4, 5].map(page => (
          <S.PaginationButton
            key={page}
            onClick={() => setCurrentPage(page)}
            $isSelect={page === currentPage}
          >
            {page}
          </S.PaginationButton>
        ))}
      </S.PaginationDiv>
    </>
  );
}

export default withCosmeticItem(ItemContainer);
