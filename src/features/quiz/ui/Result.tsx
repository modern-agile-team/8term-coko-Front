import { isMobile } from '@modern-kit/utils';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';
import { userHpQuery, userProgressQuery } from '@features/user/queries';
import { useClientQuizStore } from '@store/useClientQuizStore';
import useUserStore from '@store/useUserStore';
import type { PartStatus } from '@features/learn/types';
import type { Quiz } from '@features/quiz/types';
import { isLoggedIn } from '@features/user/service/authUtils';
import { isCompleted } from '@features/quiz/service/quizUtils';
import { useHpUpdate } from '@/features/quiz/service/hooks';

interface ResultProps {
  quizId: Quiz['id'];
  answer: Quiz['answer'];
  isCorrect: boolean;
  closeModal: () => void;
  partStatus: PartStatus;
}

export default function Result({
  quizId,
  answer,
  isCorrect,
  closeModal,
  partStatus,
}: ResultProps) {
  const { nextPage, resetUserResponseAnswer } = useClientQuizStore();
  const { user } = useUserStore();
  const { mutate: progressUpdate } = userProgressQuery.updatePartProgress();
  useHpUpdate(isCorrect);
  const handleOnClick = () => {
    resetUserResponseAnswer();
    closeModal();
    nextPage();
    if (isLoggedIn(user) && !isCompleted(partStatus)) {
      progressUpdate({
        userId: user.id,
        quizId,
        body: { isCorrect },
      });
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
