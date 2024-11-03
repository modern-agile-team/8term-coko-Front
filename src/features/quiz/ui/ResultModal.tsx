import progressQuery from '../../../apis/users';
import { useClientQuizStore } from '../../../store/useQuizStore';
import Quiz from '../../../types/Quiz';
import { ScoreBackGroundDiv, ScoreSection } from '../styles';
interface ResultModalProps {
  quizId: Quiz['id'];
  result: boolean;
  setIsResultModal: (parameter: boolean) => void;
}
export default function ResultModal({
  quizId,
  result,
  setIsResultModal,
}: ResultModalProps) {
  const { handleNextPage, resetUserResponseAnswer, pushTotalResults } =
    useClientQuizStore();
  //임시 유저 가져오기
  const user = localStorage.getItem('user');
  let userId: number;
  if (user !== null) {
    userId = JSON.parse(user).id;
  }

  const addProgress = progressQuery.put();

  //임시 유저 가져오기
  return (
    <>
      <ScoreBackGroundDiv>
        <ScoreSection>
          {result ? '정답' : '오답'}
          <button
            onClick={() => {
              resetUserResponseAnswer();
              pushTotalResults(result);
              setIsResultModal(false);
              handleNextPage();
              addProgress.mutate({
                userId,
                quizId,
                body: { isCorrect: result },
              });
            }}
          >
            계속하기
          </button>
        </ScoreSection>
      </ScoreBackGroundDiv>
    </>
  );
}
