import { FC } from 'react';
import { quizzesQuery } from '@features/quiz/queries';
import { isLoggedIn } from '@features/user/service/authUtils';
import useUserStore from '@store/useUserStore';
import type { Quiz } from '@features/quiz/types';
import { PartStatus } from '@/features/learn/types';
import { userQuizzesQuery } from '@/features/user/queries';
import { TUTORIAL_QUIZZES } from '@/features/tutorial/constants';

interface WithQuizzesProps {
  partId: number;
  partStatus: PartStatus | 'TUTORIAL';
}

interface InjectedProps {
  quizzes: Quiz[];
}

const withQuizzes = <P extends object>(
  WrappedComponent: FC<P & InjectedProps>
) => {
  const ComponentWithQuizzes: FC<P & WithQuizzesProps> = ({
    partId,
    partStatus,
    ...props
  }) => {
    const { user } = useUserStore();

    //파트가 잠겼을때는 에러를 던짐
    if (partStatus === 'LOCKED') {
      throw new Error('아직 진행할 수 없는 파트입니다.');
    }
    //일반적으로는 모든 퀴즈를 제공
    if (partStatus !== 'IN_PROGRESS' && partStatus !== 'TUTORIAL') {
      const { data: quizzes } = quizzesQuery.getQuizzes({ partId });

      return (
        <WrappedComponent
          {...(props as P)}
          quizzes={quizzes}
          partId={partId}
          PartStatus={partStatus}
        />
      );
    }
    //로그인 했고 풀고있던 파트에 대해서는 풀고있는 퀴즈를 제공
    if (isLoggedIn(user) && partStatus === 'IN_PROGRESS') {
      const { data: quizzes } = userQuizzesQuery.getQuizzes({
        partId,
      });

      return (
        <WrappedComponent
          {...(props as P)}
          quizzes={quizzes}
          partId={partId}
          PartStatus={partStatus}
        />
      );
    }
    //다 아닐때(튜토리얼) 문제 제공
    return <WrappedComponent {...(props as P)} quizzes={TUTORIAL_QUIZZES} />;
  };

  return ComponentWithQuizzes;
};

export default withQuizzes;
