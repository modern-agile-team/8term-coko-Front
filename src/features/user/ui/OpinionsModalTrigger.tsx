import OpinionsModal from '@/features/user/ui/opinionsModal';
import { OpinionsButton } from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';

export default function OpinionsModalTrigger() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const modalRef = useOutsideClick(closeModal);

  return (
    <>
      <Modal isShow={isShow}>
        <OpinionsModal modalRef={modalRef} closeModal={closeModal} />
      </Modal>
      <OpinionsButton onClick={openModal}>문의하기</OpinionsButton>
    </>
  );
}
