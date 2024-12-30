import QuestSection from './QuestSection';
import { getImageUrl } from '@utils/getImageUrl';
import { useLocation } from 'react-router-dom';

export default function DailyQuest() {
  const location = useLocation();
  const isLearn = location.pathname === '/learn';

  const quests = [
    {
      title: '파트 1 클리어',
      progress: 30,
      maxProgress: 100,
      progressBarColor: '#FFD100',
      rewardIcon: isLearn
        ? getImageUrl('포인트.svg')
        : getImageUrl('노랑-퀘스트-진행.svg'),
      progressBarIcon: getImageUrl('노랑-도장.svg'),
    },
    {
      title: '문제 4개 풀기',
      progress: 100,
      maxProgress: 100,
      progressBarColor: '#FFD100',
      rewardIcon: isLearn
        ? getImageUrl('포인트.svg')
        : getImageUrl('노랑-퀘스트-보상.svg'),
      progressBarIcon: getImageUrl('노랑-도장.svg'),
    },
  ];

  return <QuestSection title="오늘의 퀘스트" quests={quests} />;
}
