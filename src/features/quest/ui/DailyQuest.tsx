import QuestSection from './QuestSection';
import { useLocation } from 'react-router-dom';
import type { Quest } from 'features/quest/types';

const quests: Quest[] = [
  { id: 1, title: '파트 1 클리어', progress: 30, maxProgress: 100 },
  { id: 2, title: '문제 4개 풀기', progress: 100, maxProgress: 100 },
];

export default function DailyQuest() {
  const location = useLocation();
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  return (
    <QuestSection
      title="오늘의 퀘스트"
      quests={quests}
      isLearn={isLearn}
      isQuest={isQuest}
      component="daily"
    />
  );
}
