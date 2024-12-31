import QuestSection from './QuestSection';
import { useLocation } from 'react-router-dom';
import type { Quest } from 'features/quest/types';
import { getImageUrl } from '@/utils/getImageUrl';

const quests: Quest[] = [
  { id: 1, title: '파트 1 클리어', progress: 30, maxProgress: 100 },
  { id: 2, title: '문제 4개 풀기', progress: 100, maxProgress: 100 },
];

export default function DailyQuest() {
  const location = useLocation();
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  // UI 속성을 컴포넌트와 progress에 따라 동적으로 설정 (DailyQuest)
  const getDailyUIProps = (progress: number, maxProgress: number) => {
    const isComplete = progress >= maxProgress;
    return {
      progressBarColor: '#FFD100',
      rewardIcon: getImageUrl(
        isComplete ? '노랑-퀘스트-보상.svg' : '노랑-퀘스트-진행.svg'
      ),
      progressBarIcon: getImageUrl('노랑-도장.svg'),
    };
  };

  return (
    <QuestSection
      title="오늘의 퀘스트"
      quests={quests}
      isLearn={isLearn}
      isQuest={isQuest}
      getUIProps={getDailyUIProps}
    />
  );
}
