import QuestSection from './QuestSection';
import type { Quest } from 'features/quest/types';
import { getImageUrl } from '@/utils/getImageUrl';

const quests: Quest[] = [
  { id: 1, title: '섹션 1 클리어', progress: 100, maxProgress: 100 },
  { id: 2, title: '섹션 2 클리어', progress: 30, maxProgress: 100 },
];

export default function MainQuest() {

  // UI 속성을 컴포넌트와 progress에 따라 동적으로 설정 (MainQuest)
  const getMainUIProps = (progress: number, maxProgress: number) => {
    const isComplete = progress >= maxProgress;
    return {
      progressBarColor: '#F9012F',
      rewardIcon: getImageUrl(
        isComplete ? '빨강-퀘스트-보상.svg' : '빨강-퀘스트-진행.svg'
      ),
      progressBarIcon: getImageUrl('빨강-도장.svg'),
    };
  };

  return (
    <QuestSection
      title="메인 퀘스트"
      quests={quests}
      isLearn={false}
      isQuest={true}
      getUIProps={getMainUIProps}
    />
  );
}
