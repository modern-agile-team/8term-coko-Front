import Header from '@/common/layout/Header';
import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import { useGetLocationState } from '@/features/quiz/service/hooks';
import QuizContainer from '@/features/quiz/ui/QuizContainer';
import { HeaderSection } from '@/pages/quiz/styles';
import { AlignCenter } from '@/style/LayOut';

export default function Quiz() {
  const QuizWithQuizzes = withQuizzes(QuizContainer);

  const { partId, partStatus } = useGetLocationState();

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
