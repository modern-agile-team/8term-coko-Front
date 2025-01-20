import { TutorialClearWrapper } from '@/features/tutorial/ui/styles';
import { useClientQuizStore } from '@/store/useClientQuizStore';
import { Link } from 'react-router-dom';

export default function TutorialClear() {
  return (
    <TutorialClearWrapper>
      튜토리얼 클리어 축하해
      <Link to="/learn">돌아가기</Link>
    </TutorialClearWrapper>
  );
}
