import CartList from '@/features/store/ui/CartList';
import MyCharacter from '@/features/user/ui/MyCharacter';
import { MyCharacterSection, StoreButton } from '@/pages/store/styles';
import useModal from './../../../hooks/useModal';
import { userCosmeticItemsQuery } from '@/features/user/queries';
import { useCosmeticItemStore } from '@/features/store/store';
import ProfileImage from '@/features/user/ui/ProfileImage';
import useUserStore from './../../../store/useUserStore';
import { isLoggedIn } from '@/features/user/service/authUtils';
import PreviewMyCharacter from '@/features/store/ui/PreviewMyCharacter';
import PreViewProfileImage from '@/features/store/ui/PreviewMyProfileImage';

export default function StoreMyCharacterSection() {
  const { Modal, isShow, openModal, closeModal } = useModal();

  const { mutate: resetEquippedItemMutate } =
    userCosmeticItemsQuery.useResetEquippedItems();
  const { user } = useUserStore();

  const { toggleIsMyItemsVisible, resetEquippedItem, query, isMyItemsVisible } =
    useCosmeticItemStore();

  const renderCharacterPreview = () => {
    if (query.mainCategoryId === 3) {
      return isMyItemsVisible ? (
        <ProfileImage isIcon={false} />
      ) : (
        <PreViewProfileImage />
      );
    }
    return isMyItemsVisible ? <MyCharacter /> : <PreviewMyCharacter />;
  };

  const handleRest = () => {
    if (isMyItemsVisible) {
      resetEquippedItemMutate();
      return;
    }
    resetEquippedItem();
  };

  return (
    <>
      <Modal isShow={isShow}>
        <CartList
          isMobileHidden={false}
          mobileCartListCloseModal={closeModal}
        />
      </Modal>
      <CartList isMobileHidden={true} />
      <MyCharacterSection>
        <div>
          {isLoggedIn(user) && (
            <StoreButton
              $backgroundColor="#49FF87"
              $borderColor="#01F152"
              onClick={toggleIsMyItemsVisible}
            >
              내가 구매한 아이템
            </StoreButton>
          )}

          <StoreButton
            $backgroundColor="#FF4949"
            $borderColor="#E8080C"
            onClick={handleRest}
          >
            초기화
          </StoreButton>
        </div>
        <div>{renderCharacterPreview()}</div>
        <div>
          <StoreButton
            $backgroundColor="#FFB53D"
            $borderColor="#F09900"
            onClick={openModal}
          >
            장바구니
          </StoreButton>
        </div>
      </MyCharacterSection>
    </>
  );
}
