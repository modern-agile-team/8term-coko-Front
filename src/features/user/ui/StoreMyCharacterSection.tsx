import CartList from '@/features/store/ui/CartList';
import MyCharacter from '@/features/user/ui/MyCharacter';
import ProfileImage from '@/features/user/ui/ProfileImage';
import { MyCharacterSection, StoreButton } from '@/pages/store/styles';
import { useToggle } from '@modern-kit/react';
import useModal from './../../../hooks/useModal';

export default function StoreMyCharacterSection() {
  const { Modal, isShow, openModal, closeModal } = useModal();
  return (
    <>
      <Modal isShow={isShow} outSideClickCallback={closeModal}>
        <CartList isMobileHidden={false} />
      </Modal>
      <CartList isMobileHidden={true} />
      <MyCharacterSection>
        <div>
          <StoreButton $backgroundColor="#49FF87" $borderColor="#01F152">
            내가 구매한 아이템
          </StoreButton>
          <StoreButton $backgroundColor="#FF4949" $borderColor="#E8080C">
            초기화
          </StoreButton>
        </div>
        <div>
          {/* {itemQuery === 'profile' ? (
          <ProfileImage isIcon={false} />
        ) : (
          <MyCharacter />
        )} */}
        </div>
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
