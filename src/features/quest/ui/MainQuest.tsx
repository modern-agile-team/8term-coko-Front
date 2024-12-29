import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import ProgressBar from '@features/progress/ui/ProgressBar';

export default function MainQuest() {
  // 임시 데이터
  const progress1 = 30;
  const progress2 = 100;
  const maxProgress1 = 100;
  const maxProgress2 = 100;

  const rewardIconSrc1 = getImageUrl('빨강-퀘스트-진행.svg');
  const rewardIconSrc2 = getImageUrl('빨강-퀘스트-보상.svg');

  return (
    <S.QuestContainer>
      <S.DailyQuestSection>
        <S.QuestContentWrapper>
          <S.QuestContent>
            <S.QuestIcon src={getImageUrl('폭탄-아이콘.svg')} />
            <S.DailyQuestText>메인 퀘스트</S.DailyQuestText>
          </S.QuestContent>
          <S.QuestsWrapper>
            <S.QuestsTitle>섹션 1 클리어</S.QuestsTitle>
            <S.ProgressBarWrapper>
              <S.ProgressBarIcon src={getImageUrl('빨강-도장.svg')} />
              <ProgressBar
                $progress={progress1}
                $maxProgress={maxProgress1}
                $maxWidth="434px"
                $height="15px"
                $boxBgColor="#F3F3F3"
                $innerBgColor="#F9012F"
                $borderRadius="20px"
              />
              <S.RewardIconWrapper>
                <S.RewardIcon src={getImageUrl('빨강-퀘스트-진행.svg')} />
              </S.RewardIconWrapper>
            </S.ProgressBarWrapper>
          </S.QuestsWrapper>
          <S.QuestsWrapper>
            <S.QuestsTitle>섹션 2 클리어</S.QuestsTitle>
            <S.ProgressBarWrapper>
              <S.ProgressBarIcon src={getImageUrl('빨강-도장.svg')} />
              <ProgressBar
                $progress={progress2}
                $maxProgress={maxProgress2}
                $maxWidth="434px"
                $height="15px"
                $boxBgColor="#F3F3F3"
                $innerBgColor="#F9012F"
                $borderRadius="20px"
              />
              <S.RewardIconWrapper>
            <S.RewardIcon src={getImageUrl('빨강-퀘스트-보상.svg')} />
          </S.RewardIconWrapper>
        </S.ProgressBarWrapper>
      </S.QuestsWrapper>
      </S.QuestContentWrapper>
    </S.DailyQuestSection>
  </S.QuestContainer>
  );
}
