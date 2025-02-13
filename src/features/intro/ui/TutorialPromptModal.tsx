import { useNavigate } from 'react-router-dom';
import {
  TutorialPromptModalWrapper,
  TutorialPromptModalContent,
} from './styles';
import { useOutsidePointerDown } from '@modern-kit/react';

interface TutorialPromptModalProps {
  closeModal: () => void;
}

export default function TutorialPromptModal({
  closeModal,
}: TutorialPromptModalProps) {
  const navigate = useNavigate();

  const modalRef = useOutsidePointerDown<HTMLDivElement>(() => {
    closeModal();
  });

  const handleGoToLearnTutorial = () => {
    closeModal();
    navigate('/learn/tutorial');
  };

  const handleGoToLearn = () => {
    closeModal();
    navigate('/learn');
  };

  return (
    <TutorialPromptModalWrapper>
      <TutorialPromptModalContent ref={modalRef}>
        <h2>튜토리얼을 시작하시겠습니까?</h2>
        <button onClick={handleGoToLearnTutorial}>네, 시작할게요</button>
        <button onClick={handleGoToLearn}>바로 학습 페이지로 이동</button>
      </TutorialPromptModalContent>
    </TutorialPromptModalWrapper>
  );
}
