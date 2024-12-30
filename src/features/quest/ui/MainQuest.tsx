import QuestSection from './QuestSection';
import type { Quest } from 'features/quest/types';

export default function MainQuest() {
  const quests: Quest[] = [
    { id: 1, title: '섹션 1 클리어', progress: 100, maxProgress: 100 },
    { id: 2, title: '섹션 2 클리어', progress: 30, maxProgress: 100 },
  ];

  return (
    <QuestSection
      title="메인 퀘스트"
      quests={quests}
      isLearn={false}
      isQuest={true}
      component="main"
    />
  );
}
