import { progressQuery } from '../../../queries/usersQuery';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import useUserStore from '../../../store/useUserStore';
import Quiz from '../../../types/Quiz';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';
import { getImageUrl } from '@utils/getImageUrl';

interface ResultProps {
  quizId: Quiz['id'];
  answer: Quiz['answer'];
  result: boolean;
  closeModal: () => void;
}
export default function Result({
  quizId,
  answer,
  result,
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
      <ScoreSection
        $backGroundImage={getImageUrl(result ? `정답모달.svg` : `오답모달.svg`)}
      >
        <AnswerDiv>{!result && '정답 : ' + answer}</AnswerDiv>
        <NextPageButton
          $isAnswer={result}
          onClick={() => {
            resetUserResponseAnswer();
            closeModal();
            nextPage();
            userId &&
              addProgress.mutate({
                userId,
                quizId,
                body: { isCorrect: result },
              });
          }}
        >
          계속하기
        </NextPageButton>
      </ScoreSection>
    </>
  );
}
