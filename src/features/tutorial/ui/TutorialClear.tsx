import { TutorialClearWrapper } from '@/features/tutorial/ui/styles';
import { useClientQuizStore } from '@/store/useClientQuizStore';
import { Link } from 'react-router-dom';

export default function TutorialClear() {
  const { reset } = useClientQuizStore();
  return (
    <TutorialClearWrapper>
      튜토리얼 클리어 축하해
      <Link to="/learn">돌악기</Link>
    </TutorialClearWrapper>
  );
}
