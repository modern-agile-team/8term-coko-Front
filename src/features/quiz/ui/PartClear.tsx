import useModal from '@/hooks/useModal';

export default function PartClear() {
  const { Modal, closeModal, isShow } = useModal({ enable: true });
  return (
    <>
      <Modal isShow={isShow}>
        <h1>와 깼다 ㅎㅎ</h1>
        <button
          onClick={() => {
            closeModal();
          }}
        >
          넘어가기
        </button>
      </Modal>
    </>
  );
}
