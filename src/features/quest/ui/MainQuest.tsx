import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import QuestSection from './QuestSection';
import ProgressBar from '@features/progress/ui/ProgressBar';
import type { MainQuest } from '@features/quest/types';

const quests: MainQuest[] = [
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

  const questUrlProps = { $isLearn: false, $isQuest: true };

  return (
    <QuestSection title="메인 퀘스트" isLearn={false} isQuest={true}>
      {quests.map(quest => {
        const { progressBarColor, rewardIcon, progressBarIcon } =
          getMainUIProps(quest.progress, quest.maxProgress);

        const isComplete = quest.progress >= quest.maxProgress;

        return (
          <S.QuestWrapper key={quest.id} {...questUrlProps}>
            <S.QuestsTitle {...questUrlProps}>{quest.title}</S.QuestsTitle>
            <S.ProgressBarWrapper {...questUrlProps}>
              {progressBarIcon && (
                <S.ProgressBarIcon
                  src={progressBarIcon}
                  {...questUrlProps}
                  alt="메인 퀘스트 도장"
                />
              )}
              <ProgressBar
                $progress={quest.progress}
                $maxProgress={quest.maxProgress}
                $maxWidth="434px"
                $height="25px"
                $boxBgColor="#F3F3F3"
                $innerBgColor={progressBarColor}
                $borderRadius="20px"
              />
              <S.RewardIconWrapper {...questUrlProps}>
                <S.RewardIcon
                  src={rewardIcon}
                  alt={isComplete ? '메인 퀘스트 보상' : '메인 퀘스트 진행'}
                />
              </S.RewardIconWrapper>
            </S.ProgressBarWrapper>
          </S.QuestWrapper>
        );
      })}
    </QuestSection>
  );
}
