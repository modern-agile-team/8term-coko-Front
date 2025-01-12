import EmphasizedItem from '@/features/tutorial/ui/EmphasizedItem';
import useFunnel from '@/hooks/useFunnel';
import useModal from '@/hooks/useModal';

export default function QuizTour() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const { Funnel, setStep } = useFunnel('진행바');
  return (
    <>
      <Modal isShow={true}>
        <Funnel>
          <Funnel.Step name="진행바">
            <EmphasizedItem
              onNext={() => setStep('뭐지')}
              description="진행도바임"
            />
          </Funnel.Step>
          <Funnel.Step name="뭐지">
            <div>ㅎㅇㅇㅇㅇㅇㅇ</div>
          </Funnel.Step>
        </Funnel>
      </Modal>
    </>
  );
}
