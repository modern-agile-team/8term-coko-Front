import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { useLocation } from 'react-router-dom';
import ProgressBar from '@features/progress/ui/ProgressBar';

interface QuestSectionProps {
  title: string;
  quests: {
    title: string;
    progress: number;
    maxProgress: number;
    progressBarColor: string;
    rewardIcon: string;
    progressBarIcon: string;
  }[];
}

export default function QuestSection({ title, quests }: QuestSectionProps) {
  const location = useLocation();
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  // ProgressBar 크기 설정
  const progressBarSizeProps = isLearn
    ? { $maxWidth: '172px', $height: '13px' }
    : isQuest
    ? { $maxWidth: '434px', $height: '25px' }
    : {};

  return (
    <S.QuestContainer $isLearn={isLearn} $isQuest={isQuest}>
      <S.DailyQuestSection $isLearn={isLearn} $isQuest={isQuest}>
        <S.QuestContentWrapper $isLearn={isLearn} $isQuest={isQuest}>
          <S.QuestContent $isLearn={isLearn} $isQuest={isQuest}>
            <S.QuestIcon
              src={getImageUrl('폭탄-아이콘.svg')}
              $isLearn={isLearn}
              $isQuest={isQuest}
            />
            <S.DailyQuestText $isLearn={isLearn} $isQuest={isQuest}>
              {title}
            </S.DailyQuestText>
          </S.QuestContent>
          {quests.map((quest, index) => (
            <S.QuestsWrapper key={index} $isLearn={isLearn} $isQuest={isQuest}>
              <S.QuestsTitle $isLearn={isLearn} $isQuest={isQuest}>
                {quest.title}
              </S.QuestsTitle>
              <S.ProgressBarWrapper $isLearn={isLearn} $isQuest={isQuest}>
                <S.ProgressBarIcon
                  src={quest.progressBarIcon}
                  $isLearn={isLearn}
                  $isQuest={isQuest}
                />
                <ProgressBar
                  $progress={quest.progress}
                  $maxProgress={quest.maxProgress}
                  {...progressBarSizeProps}
                  $boxBgColor="#F3F3F3"
                  $innerBgColor={quest.progressBarColor}
                  $borderRadius="20px"
                />
                <S.RewardIconWrapper $isLearn={isLearn} $isQuest={isQuest}>
                  <S.RewardIcon src={quest.rewardIcon} />
                </S.RewardIconWrapper>
              </S.ProgressBarWrapper>
            </S.QuestsWrapper>
          ))}
        </S.QuestContentWrapper>
      </S.DailyQuestSection>
    </S.QuestContainer>
  );
}
