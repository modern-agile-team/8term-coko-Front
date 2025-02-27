import { isLoggedIn } from '@/features/user/service/authUtils';
import OpinionsModal from '@/features/user/ui/OpinionsModal';
import { OpinionsButton } from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import useOutsideClick from '@/hooks/useOutsideClick';
import useUserStore from '@/store/useUserStore';
import { getImageUrl } from '@/utils/getImageUrl';

export default function OpinionsModalTrigger() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const modalRef = useOutsideClick(closeModal);
  const { user } = useUserStore();

  return (
    <>
      <Modal isShow={isShow}>
        <OpinionsModal modalRef={modalRef} closeModal={closeModal} />
      </Modal>
      {isLoggedIn(user) && (
        <OpinionsButton onClick={openModal}>
          <img src={getImageUrl('문의하기.svg')} />
          문의하기
        </OpinionsButton>
      )}
    </>
  );
}
