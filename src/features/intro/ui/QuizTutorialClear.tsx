import { TutorialClearWrapper } from '@/features/intro/ui/styles';
import { Link } from 'react-router-dom';

export default function QuizTutorialClear() {
  return (
    <TutorialClearWrapper>
      튜토리얼 클리어 축하해
      <Link to="/learn">돌아가기</Link>
    </TutorialClearWrapper>
  );
}
