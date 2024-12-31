import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import ProgressBar from '@features/progress/ui/ProgressBar';
import type { Quest } from 'features/quest/types';

interface QuestSectionProps {
  title: string;
  quests: Quest[];
  isLearn: boolean;
  isQuest: boolean;
  getUIProps: (progress: number, maxProgress: number) => {
    progressBarColor: string;
    rewardIcon: string;
    progressBarIcon: string;
  };
}

export default function QuestSection({
  title,
  quests,
  isLearn,
  isQuest,
  getUIProps,
}: QuestSectionProps) {

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
            <S.QuestHeading {...questUrlProps}>{title}</S.QuestHeading>
          </S.QuestContent>
          {quests.map(quest => {
            const { progressBarColor, rewardIcon, progressBarIcon } =
            getUIProps(quest.progress, quest.maxProgress);

            return (
              <S.QuestWrapper key={quest.id} {...questUrlProps}>
                <S.QuestsTitle {...questUrlProps}>{quest.title}</S.QuestsTitle>
                <S.ProgressBarWrapper {...questUrlProps}>
                  {progressBarIcon && (
                    <S.ProgressBarIcon
                      src={progressBarIcon}
                      {...questUrlProps}
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
                    <S.RewardIcon src={rewardIcon} />
                  </S.RewardIconWrapper>
                </S.ProgressBarWrapper>
              </S.QuestWrapper>
            );
          })}
        </S.QuestContentWrapper>
      </S.QuestSection>
    </S.QuestContainer>
  );
}
