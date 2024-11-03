import progressQuery from '../../../queries/usersQuery';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import useUserStore from '../../../store/useUserStore';
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
  const { user } = useUserStore();
  const userId = user.id;
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
              userId &&
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
