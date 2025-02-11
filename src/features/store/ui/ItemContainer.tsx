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

interface ItemContainerProps {
  cosmeticItem: CosmeticItem[];
}

function ItemContainer({ cosmeticItem }: ItemContainerProps) {
  const { addCosmeticItems, isMyItemsVisible, toggleEquippedItem } =
    useCosmeticItemStore();

  const [selectedItem, setSelectedItem] = useState<CosmeticItem | null>(null); // 선택된 아이템
  const [currentPage, setCurrentPage] = useState<number>();
  const { Modal, isShow, openModal, closeModal } = useModal();

  return (
    <>
      <Modal isShow={isShow} outSideClickCallback={closeModal}>
        <CosmeticItemCheckOut>
          <CosmeticItemCheckOut.DetailBox>
            <>
              {selectedItem && (
                <CosmeticItemCheckOut.StoreItem
                  name={selectedItem.name}
                  image={selectedItem.image}
                  price={selectedItem.price}
                />
              )}
              <p>구매할래?</p>
            </>
          </CosmeticItemCheckOut.DetailBox>
          <CosmeticItemCheckOut.ConfirmButtonList
            onAccept={() => {}}
            onReject={() => {}}
          />
        </CosmeticItemCheckOut>
      </Modal>
      <S.ItemContainer>
        {cosmeticItem.map(item => (
          <StoreItem
            key={item.id}
            onClick={() =>
              toggleEquippedItem(
                item.subCategoryId ?? item.mainCategoryId,
                item.image
              )
            }
          >
            <StoreItem.Header name={item.name} />
            <StoreItem.Image image={item.image} />
            <StoreItem.Footer>
              {isMyItemsVisible ? (
                <EquipButton>장착</EquipButton>
              ) : (
                <>
                  <label>{item.price} Point</label>
                  <img
                    src={getImageUrl('')}
                    alt="장바구니넣기"
                    onClick={e => {
                      e.stopPropagation();
                      addCosmeticItems(item);
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
