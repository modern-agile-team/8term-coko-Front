import { isMobile } from '@modern-kit/utils';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';
import { useUserProgressQuery } from '@features/user/queries';
import { useClientQuizStore } from '@/features/quiz/useClientQuizStore';
import useUserStore from '@store/useUserStore';
import type { PartStatus } from '@features/learn/types';
import type { Quiz } from '@features/quiz/types';
import { isLoggedIn } from '@features/user/service/authUtils';
import { isCompleted } from '@/features/quiz/utils';

interface ResultProps {
  quizId: Quiz['id'];
  answer: Quiz['answer'];
  isCorrect: boolean;
  openModal: () => void;
  closeModal: () => void;
  onNext: () => void;
  partStatus: PartStatus;
  isQuizFinished: boolean;
}

export default function Result({
  quizId,
  answer,
  isCorrect,
  closeModal,
  partStatus,
  onNext,
  openModal,
  isQuizFinished,
}: ResultProps) {
  const { nextPage, resetUserResponseAnswer } = useClientQuizStore();
  const { user } = useUserStore();
  const { mutate: progressUpdate } = useUserProgressQuery.updateQuizProgress();

  const handleOnClick = () => {
    resetUserResponseAnswer();
    closeModal();
    if (isLoggedIn(user) && !isCompleted(partStatus)) {
      progressUpdate({
        quizId,
        body: { isCorrect },
      });
    }
    if (isQuizFinished) {
      onNext();
      openModal();
    } else {
      nextPage();
    }
  };

  const answerFeedback = isMobile() ? answer : `정답 : ${answer}`;

  return (
    <>
      <ScoreSection $isCorrect={isCorrect}>
        <AnswerDiv>{!isCorrect && answerFeedback}</AnswerDiv>
        <NextPageButton $isAnswer={isCorrect} onClick={handleOnClick}>
          계속하기
        </NextPageButton>
      </ScoreSection>
    </>
  );
}
