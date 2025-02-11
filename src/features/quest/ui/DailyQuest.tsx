import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useLocation } from 'react-router-dom';
import QuestSection from './QuestSection';
import ProgressBar from '@features/progress/ui/ProgressBar';
import type { Quest } from 'features/quest/types';

const quests: Quest[] = [
  { id: 1, title: '파트 1 클리어', progress: 30, maxProgress: 100 },
  { id: 2, title: '문제 4개 풀기', progress: 100, maxProgress: 100 },
];

export default function DailyQuest() {
  const location = useLocation();
  const isLearn = location.pathname.startsWith('/learn');
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

  // ProgressBar 크기 설정 (isLearn, isQuest에 따라 다름)
  const progressBarSizeProps = isLearn
    ? { $maxWidth: '172px', $height: '13px' }
    : isQuest
    ? { $maxWidth: '434px', $height: '25px' }
    : {};

  const questUrlProps = { $isLearn: isLearn, $isQuest: isQuest };

  return (
    <QuestSection title="오늘의 퀘스트" isLearn={isLearn} isQuest={isQuest}>
      {quests.map(quest => {
        const { progressBarColor, rewardIcon, progressBarIcon } =
          getDailyUIProps(quest.progress, quest.maxProgress);

        const isComplete = quest.progress >= quest.maxProgress;

        return (
          <S.QuestWrapper key={quest.id} {...questUrlProps}>
            <S.QuestsTitle {...questUrlProps}>{quest.title}</S.QuestsTitle>
            <S.ProgressBarWrapper {...questUrlProps}>
              {progressBarIcon && (
                <S.ProgressBarIcon
                  src={progressBarIcon}
                  {...questUrlProps}
                  alt="일일 퀘스트 도장"
                />
              )}
              <ProgressBar
                $progress={quest.progress}
                $maxProgress={quest.maxProgress}
                {...progressBarSizeProps}
                $boxBgColor="#F3F3F3"
                $innerBgColor={progressBarColor}
                $borderRadius="20px"
              />
              <S.RewardIconWrapper {...questUrlProps}>
                <S.RewardIcon
                  src={rewardIcon}
                  alt={isComplete ? '일일 퀘스트 보상' : '일일 퀘스트 진행'}
                />
              </S.RewardIconWrapper>
            </S.ProgressBarWrapper>
          </S.QuestWrapper>
        );
      })}
    </QuestSection>
  );
}
