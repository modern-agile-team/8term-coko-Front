import Header from '@/common/layout/Header';
import { PartStatus } from '@/features/learn/types';
import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import QuizContainer from '@/features/quiz/ui/QuizContainer';
import { HeaderSection } from '@/pages/quiz/styles';
import { AlignCenter } from '@/style/LayOut';
import { useLocation } from 'react-router-dom';

export default function Quiz() {
  const QuizWithQuizzes = withQuizzes(QuizContainer);
  const { partId, partStatus } = useLocation().state as {
    partId: number;
    partStatus: PartStatus;
  };

  return (
    <AlignCenter>
      <HeaderSection>
        <title>파트{partId}퀴즈-coko</title>
        <Header />
      </HeaderSection>
      <QuizWithQuizzes partId={partId} partStatus={partStatus} />
    </AlignCenter>
  );
}
