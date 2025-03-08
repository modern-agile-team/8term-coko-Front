import { isMobile } from '@modern-kit/utils';
import { AnswerDiv, NextPageButton, ScoreSection } from './styles';
import { usersProgressQuery } from '@features/user/queries';
import { useClientQuizStore } from '@/features/quiz/stores';
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
  const { mutate: progressUpdate } = usersProgressQuery.useUpdateQuizProgress();

  const handleOnClick = () => {
    resetUserResponseAnswer();
    closeModal();
    //1. 사용자가 로그인 되어있는지 확인
    if (isLoggedIn(user)) {
      //2. 사용자의 파트 상태 확인
      if (isCompleted(partStatus)) {
        //3. 사용자의 파트 상태가 완료 상태라면 정답 상태 true로 업데이트
        progressUpdate({
          quizId,
          body: { isCorrect: true },
        });
      } else {
        //4. 사용자의 파트 상태가 완료 상태가 아니라면 정답 상태에 따라 업데이트
        progressUpdate({
          quizId,
          body: { isCorrect },
        });
      }
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
