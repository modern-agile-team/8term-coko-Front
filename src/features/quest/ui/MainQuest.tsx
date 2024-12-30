import QuestSection from './QuestSection';
import { getImageUrl } from '@utils/getImageUrl';

export default function MainQuest() {
  const quests = [
    {
      title: '섹션 1 클리어',
      progress: 100,
      maxProgress: 100,
      progressBarColor: '#F9012F',
      rewardIcon: getImageUrl('빨강-퀘스트-보상.svg'),
      progressBarIcon: getImageUrl('빨강-도장.svg'),
    },
    {
      title: '섹션 2 클리어',
      progress: 30,
      maxProgress: 100,
      progressBarColor: '#F9012F',
      rewardIcon: getImageUrl('빨강-퀘스트-진행.svg'),
      progressBarIcon: getImageUrl('빨강-도장.svg'),
    },
  ];

  return <QuestSection title="메인 퀘스트" quests={quests} />;
}
