import { getLastDayOfMonth } from '@/features/user/service/utils';
import {
  AttendanceCheckButton,
  AttendanceCalendarWrapper,
} from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';
import { useMemo } from 'react';

export default function AttendanceCheck() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const modalRef = useOutsideClick(closeModal);

  const days = useMemo(() => {
    const lastDay = getLastDayOfMonth();
    return Array.from({ length: lastDay }, (_, i) => i + 1);
  }, []);

  return (
    <>
      <Modal isShow={isShow}>
        <AttendanceCalendarWrapper ref={modalRef}>
          {days.map(i => (
            <div key={i}>{i}</div>
          ))}
          <img src={getImageUrl('출석체크.svg')} />
        </AttendanceCalendarWrapper>
      </Modal>
      <AttendanceCheckButton onClick={openModal}>
        <img src={getImageUrl('출석체크-아이콘.svg')} />
      </AttendanceCheckButton>
    </>
  );
}
