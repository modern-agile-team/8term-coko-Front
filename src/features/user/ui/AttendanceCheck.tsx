import {
  AttendanceCheckButton,
  AttendanceCalendarWrapper,
} from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';

export default function AttendanceCheck() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const modalRef = useOutsideClick(closeModal);

  return (
    <>
      <Modal isShow={isShow}>
        <AttendanceCalendarWrapper ref={modalRef}>
          <img src={getImageUrl('출석체크.svg')} />
        </AttendanceCalendarWrapper>
      </Modal>
      <AttendanceCheckButton onClick={openModal}>
        <img src={getImageUrl('출석체크-아이콘.svg')} />
      </AttendanceCheckButton>
    </>
  );
}
