import { useLocation } from 'react-router-dom';
import { DailyQuestSection } from '../style';

export default function DailyQuest() {
  const location = useLocation();

  // URL에 따라 스타일 변경
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  return (
    <DailyQuestSection isLearn={isLearn} isQuest={isQuest}>
      오늘의 퀘스트
    </DailyQuestSection>
  );
}
