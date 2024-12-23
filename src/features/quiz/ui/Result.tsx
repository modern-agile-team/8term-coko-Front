import { progressQuery } from '../../../queries/usersQuery';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import useUserStore from '../../../store/useUserStore';
import Quiz from '../../../types/Quiz';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';

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
  //임시 유저 가져오기
  const { user } = useUserStore();
  const userId = user?.id;
  const addProgress = progressQuery.put();
  //임시 유저 가져오기
  return (
    <>
      <ScoreSection $isResult={isResult}>
        <AnswerDiv>{!isResult && '정답 : ' + answer}</AnswerDiv>
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
