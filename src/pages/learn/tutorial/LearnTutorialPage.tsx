import { useBeforeUnload } from '@modern-kit/react';
import LearnTutorialContainer from '@features/intro/ui/LearnTutorialContainer';

export default function LearnTutorialPage() {
  useBeforeUnload();
  return <LearnTutorialContainer />;
}
