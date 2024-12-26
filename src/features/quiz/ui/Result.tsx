import { isMobile } from '@modern-kit/utils';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';
import { progressQuery } from '@features/user/queries';
import { useClientQuizStore } from '@store/useClientQuizStore';
import useUserStore from '@store/useUserStore';
import type { Quiz } from '@features/quiz/types';

interface ResultProps {
  quizId: Quiz['id'];
  answer: Quiz['answer'];
  isResult: boolean;
  closeModal: () => void;
}
export default function Result({
  quizId,
  answer,
  isResult,
  closeModal,
}: ResultProps) {
  const { nextPage, resetUserResponseAnswer } = useClientQuizStore();
  const { user } = useUserStore();
  const userId = user?.id;
  const addProgress = progressQuery.put();
  const answerFeedback = isMobile() ? answer : `정답 : ${answer}`;

  return (
    <>
      <ScoreSection $isResult={isResult}>
        <AnswerDiv>{!isResult && answerFeedback}</AnswerDiv>
        <NextPageButton
          $isAnswer={isResult}
          onClick={() => {
            resetUserResponseAnswer();
            closeModal();
            nextPage();
            userId &&
              addProgress.mutate({
                userId,
                quizId,
                body: { isCorrect: isResult },
              });
          }}
        >
          계속하기
        </NextPageButton>
      </ScoreSection>
    </>
  );
}
