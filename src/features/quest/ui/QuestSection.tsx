import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import ProgressBar from '@features/progress/ui/ProgressBar';
import type { Quest } from 'features/quest/types';

interface QuestSectionProps {
  title: string;
  quests: Quest[];
  isLearn: boolean;
  isQuest: boolean;
  component: 'daily' | 'main';
}

export default function QuestSection({
  title,
  quests,
  isLearn,
  isQuest,
  component,
}: QuestSectionProps) {
  // UI 속성을 페이지 컨텍스트와 progress에 따라 동적으로 설정
  const getUIProps = (
    progress: number,
    maxProgress: number,
    isLearn: boolean,
    isQuest: boolean,
    component: 'daily' | 'main'
  ) => {
    const isComplete = progress >= maxProgress;

    // Learn 페이지에서 보여질 UI 속성
    if (isLearn) {
      return {
        progressBarColor: '#FFD100',
        rewardIcon: getImageUrl(
          /** '포인트-퀘스트-완료.svg' 이미지는 아직 없어서 보이지 않음. */
          isComplete ? '포인트-퀘스트-완료.svg' : '포인트.svg'
        ),
      };
    }

    // Quest 페이지에서 보여질 UI 속성
    if (isQuest) {
      return {
        progressBarColor: component === 'daily' ? '#FFD100' : '#F9012F',
        rewardIcon: getImageUrl(
          isComplete
            ? component === 'daily'
              ? '노랑-퀘스트-보상.svg'
              : '빨강-퀘스트-보상.svg'
            : component === 'daily'
            ? '노랑-퀘스트-진행.svg'
            : '빨강-퀘스트-진행.svg'
        ),
        progressBarIcon: getImageUrl(
          component === 'daily' ? '노랑-도장.svg' : '빨강-도장.svg'
        ),
      };
    }

    // 기본값
    return {};
  };

  // ProgressBar 크기 설정
  const progressBarSizeProps = isLearn
    ? { $maxWidth: '172px', $height: '13px' }
    : isQuest
    ? { $maxWidth: '434px', $height: '25px' }
    : {};

  const questUrlProps = { $isLearn: isLearn, $isQuest: isQuest };

  return (
    <S.QuestContainer {...questUrlProps}>
      <S.QuestSection {...questUrlProps}>
        <S.QuestContentWrapper {...questUrlProps}>
          <S.QuestContent {...questUrlProps}>
            <S.QuestIcon
              src={getImageUrl('폭탄-아이콘.svg')}
              {...questUrlProps}
            />
            <S.DailyOrMainQuestText {...questUrlProps}>
              {title}
            </S.DailyOrMainQuestText>
          </S.QuestContent>
          {quests.map(quest => {
            const { progressBarColor, rewardIcon, progressBarIcon } =
              getUIProps(
                quest.progress,
                quest.maxProgress,
                isLearn,
                isQuest,
                component
              );
            return (
              <S.QuestsWrapper key={quest.id} {...questUrlProps}>
                <S.QuestsTitle {...questUrlProps}>{quest.title}</S.QuestsTitle>
                <S.ProgressBarWrapper {...questUrlProps}>
                  <S.ProgressBarIcon src={progressBarIcon} {...questUrlProps} />
                  <ProgressBar
                    $progress={quest.progress}
                    $maxProgress={quest.maxProgress}
                    {...progressBarSizeProps}
                    $boxBgColor="#F3F3F3"
                    $innerBgColor={progressBarColor}
                    $borderRadius="20px"
                  />
                  <S.RewardIconWrapper {...questUrlProps}>
                    <S.RewardIcon src={rewardIcon} />
                  </S.RewardIconWrapper>
                </S.ProgressBarWrapper>
              </S.QuestsWrapper>
            );
          })}
        </S.QuestContentWrapper>
      </S.QuestSection>
    </S.QuestContainer>
  );
}
