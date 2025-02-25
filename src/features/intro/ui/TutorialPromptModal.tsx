import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

  const isQuizTutorialPage = location.pathname === '/quiz/tutorial';

  const modalRef = useOutsidePointerDown<HTMLDivElement>(() => {
    if (!isQuizTutorialPage) {
      closeModal();
    }
  });

  const handleGoToLearnTutorial = () => {
    navigate('/learn/tutorial');
  };

  const handleGoToLearn = () => {
    navigate('/learn');
  };

  return (
    <TutorialPromptModalWrapper>
      <TutorialPromptModalContent
        ref={modalRef}
        $isQuizTutorialPage={isQuizTutorialPage}
      >
        {isQuizTutorialPage ? (
          <>
            <h2>
              튜토리얼이 종료 되었습니다.
              <br />
              처음부터 다시 시작하시겠습니까?
            </h2>
            <div>
              <button onClick={closeModal}>아니요</button>
              <button onClick={handleGoToLearnTutorial}>네</button>
            </div>
          </>
        ) : (
          <>
            <h2>
              튜토리얼을
              <br />
              시작하시겠습니까?
            </h2>
            <div>
              <button onClick={handleGoToLearnTutorial}>네, 시작할게요.</button>
              <button onClick={handleGoToLearn}>바로 학습 페이지로 이동</button>
            </div>
          </>
        )}
      </TutorialPromptModalContent>
    </TutorialPromptModalWrapper>
  );
}
