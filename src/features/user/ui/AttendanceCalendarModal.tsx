import Loader from '@/common/layout/Loader';
import { getMonth } from '@/features/user/service/utils';
import AttendanceCalendar from '@/features/user/ui/AttendanceCalendar';
import {
  AttendanceCalendarWrapper,
  AttendanceCheckButton,
} from '@/features/user/ui/styles';
import useModal from '@/hooks/useModal';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';
import { Suspense } from 'react';

export default function AttendanceCalendarModal() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const modalRef = useOutsideClick(closeModal);

  return (
    <>
      <Modal isShow={isShow}>
        <Suspense fallback={<Loader />}>
          <AttendanceCalendarWrapper ref={modalRef}>
            <h1>{getMonth()}월 출석체크</h1>
            <img src={getImageUrl('달력위.svg')} />
            <AttendanceCalendar />
          </AttendanceCalendarWrapper>
        </Suspense>
      </Modal>
      <AttendanceCheckButton onClick={openModal}>
        <img src={getImageUrl('출석체크-아이콘.svg')} />
      </AttendanceCheckButton>
    </>
  );
}
