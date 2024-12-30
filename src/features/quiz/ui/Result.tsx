import { isMobile } from '@modern-kit/utils';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';
import { progressQuery } from '@features/user/queries';
import { useClientQuizStore } from '@store/useClientQuizStore';
import useUserStore from '@store/useUserStore';
import type { Quiz } from '@features/quiz/types';

interface ResultProps {
  quizId: Quiz['id'];
  answer: Quiz['answer'];
  isCorrect: boolean;
  closeModal: () => void;
}
export default function Result({
  quizId,
  answer,
  isCorrect,
  closeModal,
}: ResultProps) {
  const { nextPage, resetUserResponseAnswer } = useClientQuizStore();
  const { user } = useUserStore();
  const userId = user?.id;
  const { mutate: progressUpdate } = progressQuery.put();
  const answerFeedback = isMobile() ? answer : `정답 : ${answer}`;

  return (
    <>
      <ScoreSection $isCorrect={isCorrect}>
        <AnswerDiv>{!isCorrect && answerFeedback}</AnswerDiv>
        <NextPageButton
          $isAnswer={isCorrect}
          onClick={() => {
            resetUserResponseAnswer();
            closeModal();
            nextPage();
            userId &&
              progressUpdate({
                userId,
                quizId,
                body: { isCorrect },
              });
          }}
        >
          계속하기
        </NextPageButton>
      </ScoreSection>
    </>
  );
}
