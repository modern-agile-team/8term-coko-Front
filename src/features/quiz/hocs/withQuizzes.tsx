import React from 'react';
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
  WrappedComponent: React.FC<P & InjectedProps>
) => {
  const ComponentWithQuizzes: React.FC<P & WithQuizzesProps> = ({
    partId,
    partStatus,
    ...props
  }) => {
    const { user } = useUserStore();

    //유저가 없거나 진행중이 아닐 때 때는 모든 퀴즈 제공공
    if (!isLoggedIn(user) || partStatus !== 'IN_PROGRESS') {
      const { data: quizzes } = quizzesQuery.getQuizzes({ partId });
      return <WrappedComponent {...(props as P)} quizzes={quizzes} />;
    }
    //로그인 했고 이미 진행한적이 있을 때는 풀었던 문제 제공
    if (isLoggedIn(user) && partStatus === 'IN_PROGRESS') {
      const { data: quizzes } = userQuizzesQuery.getQuizzes({
        userId: user.id,
        partId,
      });
      return <WrappedComponent {...(props as P)} quizzes={quizzes} />;
    }
    //모든 경우가 아닐 때 (튜토리얼) 문제 제공
    return <WrappedComponent {...(props as P)} quizzes={TUTORIAL_QUIZZES} />;
  };

  return ComponentWithQuizzes;
};

export default withQuizzes;
