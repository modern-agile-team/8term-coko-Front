import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { getImageNameFromUrl } from '@utils/getImageNameFromUrl';
import { useLocation } from 'react-router-dom';
import QuestSection from './QuestSection';
import ProgressBar from '@features/progress/ui/ProgressBar';
import { useUserQuestQuery } from '@/features/user/queries';
import useUserStore from '@store/useUserStore';
import { isLoggedIn } from '@features/user/service/authUtils';

export default function DailyQuest() {
  const location = useLocation();
  const { user } = useUserStore();
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  const { data: quests } = useUserQuestQuery.getDailyQuest();

  // UI 속성을 컴포넌트와 progress에 따라 동적으로 설정 (DailyQuest)
  const getDailyUIProps = (progress: number, maxProgress: number) => {
    const isComplete = progress >= maxProgress;
    const rewardIcon = getImageUrl(
      isComplete ? '노랑-퀘스트-보상.svg' : '노랑-퀘스트-진행.svg'
    );
    return {
      progressBarColor: '#FFD100',
      rewardIcon,
      progressBarIcon: getImageUrl('노랑-도장.svg'),
      rewardAlt: getImageNameFromUrl(rewardIcon),
      progressBarAlt: getImageNameFromUrl(getImageUrl('노랑-도장.svg')),
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
      {isLoggedIn(user) ? (
        <>
          {quests &&
            quests.map(quest => {
              const {
                progressBarColor,
                rewardIcon,
                progressBarIcon,
                rewardAlt,
                progressBarAlt,
              } = getDailyUIProps(
                quest.conditionProgress,
                quest.dailyQuest.condition
              );

              return (
                <S.QuestWrapper key={quest.id} {...questUrlProps}>
                  <S.QuestsTitle {...questUrlProps}>
                    {quest.dailyQuest.content}
                  </S.QuestsTitle>
                  <S.ProgressBarWrapper {...questUrlProps}>
                    {progressBarIcon && (
                      <S.ProgressBarIcon
                        src={progressBarIcon}
                        {...questUrlProps}
                        alt={progressBarAlt}
                      />
                    )}
                    <ProgressBar
                      $progress={quest.conditionProgress}
                      $maxProgress={quest.dailyQuest.condition}
                      {...progressBarSizeProps}
                      $boxBgColor="#F3F3F3"
                      $innerBgColor={progressBarColor}
                      $borderRadius="20px"
                    />
                    <S.RewardIconWrapper {...questUrlProps}>
                      <S.RewardIcon src={rewardIcon} alt={rewardAlt} />
                    </S.RewardIconWrapper>
                  </S.ProgressBarWrapper>
                </S.QuestWrapper>
              );
            })}
        </>
      ) : (
        <S.QuestWrapper {...questUrlProps}>
          <S.LoginRequiredMessage {...questUrlProps}>
            로그인 후 퀘스트를 확인해보세요!
          </S.LoginRequiredMessage>
        </S.QuestWrapper>
      )}
    </QuestSection>
  );
}
