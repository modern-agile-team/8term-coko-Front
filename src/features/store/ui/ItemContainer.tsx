import * as S from './styles';
import { useState } from 'react';
import StoreItem from './StoreItem';
import { CosmeticItem } from '@/features/store/types';
import withCosmeticItem from '@/features/store/hocs/withCosmeticItem';
import { getImageUrl } from '@/utils/getImageUrl';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';
import { EquipButton } from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import CosmeticItemCheckOut from '@/features/store/ui/CosmeticItemCheckOut';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import toast from 'react-hot-toast';
import { isAxiosError } from 'axios';
import PurchaseModal from '@/features/store/ui/PurchaseModal';
import PageNavBar from '@/features/store/ui/PageNavBar';

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
  const [isShowModal, setIsShowModal] = useState(false);

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
      {selectedItem && (
        <PurchaseModal
          closeModal={() => {
            setIsShowModal(false);
          }}
          isShow={isShowModal}
          selectCosmeticItem={selectedItem}
        />
      )}
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
                      setIsShowModal(true);
                    }}
                  />
                </>
              )}
            </StoreItem.Footer>
          </StoreItem>
        ))}
      </S.ItemContainer>
      <PageNavBar />
    </>
  );
}

export default withCosmeticItem(ItemContainer);
