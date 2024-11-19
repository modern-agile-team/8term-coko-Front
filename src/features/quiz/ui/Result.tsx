import progressQuery from '../../../queries/usersQuery';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import useUserStore from '../../../store/useUserStore';
import Quiz from '../../../types/Quiz';
import handlePage from '../../../utils/handlePage';
import { noop } from '@modern-kit/utils';
import { AnswerDiv, NextPageButton, ScoreSection } from '../styles';

interface ResultProps {
  quizId: Quiz['id'];
  answer: Quiz['answer'];
  result: boolean;
  lastPage: number;
  closeModal: () => void;
  openModal: () => void;
}
export default function Result({
  quizId,
  answer,
  result,
  lastPage,
  closeModal,
  openModal,
}: ResultProps) {
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;
  const { nextPage, resetUserResponseAnswer, pushTotalResults, currentPage } =
    useClientQuizStore();
  //임시 유저 가져오기
  const { user } = useUserStore();
  const userId = user?.id;
  const addProgress = progressQuery.put();
  //임시 유저 가져오기
  return (
    <>
      <ScoreSection
        $backGroundImage={
          result ? `${imgUrl}정답모달.svg` : `${imgUrl}오답모달.svg`
        }
      >
        <AnswerDiv>{!result && '정답 : ' + answer}</AnswerDiv>
        <NextPageButton
          $isAnswer={result}
          onClick={() => {
            resetUserResponseAnswer();
            pushTotalResults(result);
            closeModal();
            handlePage(currentPage, lastPage, nextPage, noop, openModal);
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
