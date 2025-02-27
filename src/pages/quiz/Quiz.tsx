import Header from '@/common/layout/Header';
import { useLocationQuizState } from '@/features/quiz/hooks';
import QuizWithQuizzes from '@/features/quiz/ui/QuizContainer';
import { AlignCenter, HeaderSection } from '@/pages/quiz/styles';

export default function Quiz() {
  const { partId, partStatus } = useLocationQuizState();

  return (
    <AlignCenter>
      <HeaderSection>
        <title>퀴즈-coko</title>
        <Header />
      </HeaderSection>
      <QuizWithQuizzes partId={partId} partStatus={partStatus} />
    </AlignCenter>
  );
}
