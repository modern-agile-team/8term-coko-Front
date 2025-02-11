import CartList from '@/features/store/ui/CartList';
import MyCharacter from '@/features/user/ui/MyCharacter';
import ProfileImage from '@/features/user/ui/ProfileImage';
import { MyCharacterSection, StoreButton } from '@/pages/store/styles';
import useModal from './../../../hooks/useModal';
import { useUserItemsQuery } from '@/features/user/queries';
import useUserStore from './../../../store/useUserStore';
import { isLoggedIn } from './../service/authUtils';
import { Link } from 'react-router-dom';

export default function StoreMyCharacterSection() {
  const { user } = useUserStore();
  const { Modal, isShow, openModal, closeModal } = useModal();
  const { mutate: resetEquippedItems } = useUserItemsQuery.resetEquippedItems();

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
          <StoreButton
            $backgroundColor="#FF4949"
            $borderColor="#E8080C"
            onClick={() => resetEquippedItems()}
          >
            초기화
          </StoreButton>
        </div>
        <div>
          {/* {itemQuery === 'profile' ? (
          <ProfileImage isIcon={false} />
        ) : (
          <MyCharacter />
        )} */}
          <MyCharacter />
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
        <Link to="/login">로그인 후 이용 가능합니다.</Link>
      </MyCharacterSection>
    </>
  );
}
