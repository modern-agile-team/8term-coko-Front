import progressQuery from '../../../querys/usersQuery';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import useUserStore from '../../../store/useUserStore';
import Quiz from '../../../types/Quiz';
import { ScoreSection } from '../styles';
interface ResultModalProps {
  quizId: Quiz['id'];
  result: boolean;
  closeModal: () => void;
}
export default function ResultModal({
  quizId,
  result,
  closeModal,
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
      <ScoreSection>
        {result ? '정답' : '오답'}
        <button
          onClick={() => {
            resetUserResponseAnswer();
            pushTotalResults(result);
            closeModal();
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
    </>
  );
}
