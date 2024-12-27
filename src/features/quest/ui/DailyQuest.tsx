import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { useLocation } from 'react-router-dom';
import ProgressBar from '../../progress/ui/ProgressBar';

export default function DailyQuest() {
  const location = useLocation();

  // URL에 따라 스타일 변경
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  // 임시 데이터
  const progress1 = 30;
  const progress2 = 100;
  const maxProgress1 = 100;
  const maxProgress2 = 100;

  const rewardIconSrc1 = isLearn
    ? getImageUrl('포인트.svg')
    : isQuest
    ? getImageUrl('노랑-퀘스트-진행.svg') // isQuest일 때 사용할 보상 이미지
    : '';

  const rewardIconSrc2 = isLearn
    ? getImageUrl('포인트.svg')
    : isQuest
    ? getImageUrl('노랑-퀘스트-보상.svg') // isQuest일 때 사용할 보상 이미지
    : '';

  // ProgressBar 크기 설정
  const progressBarProps = isLearn
    ? { $maxWidth: '172px', $height: '13px' }
    : isQuest
    ? { $maxWidth: '434px', $height: '25px' } // isQuest일 때 사용할 크기
    : {};

  // 보상 아이콘 높이 설정
  const rewardHeight1 = isQuest ? '69px' : '24px';
  const rewardHeight2 = isQuest ? '44px' : '24px';

  return (
    <S.DailyQuestSection $isLearn={isLearn} $isQuest={isQuest}>
      <S.QuestContent $isLearn={isLearn} $isQuest={isQuest}>
        <S.QuestIcon
          src={getImageUrl('폭탄-아이콘.svg')}
          $isLearn={isLearn}
          $isQuest={isQuest}
        />
        <S.DailyQuestText $isLearn={isLearn} $isQuest={isQuest}>
          오늘의 퀘스트
        </S.DailyQuestText>
      </S.QuestContent>
      <S.QuestsWrapper $isLearn={isLearn} $isQuest={isQuest}>
        <S.QuestsTitle $isLearn={isLearn} $isQuest={isQuest}>
          문제 4개 클리어
        </S.QuestsTitle>
        <S.ProgressBarWrapper $isLearn={isLearn} $isQuest={isQuest}>
          <S.ProgressBarIcon
            src={getImageUrl('노랑-도장.svg')}
            $isQuest={isQuest}
            $isLearn={isLearn}
          />

          <ProgressBar
            $progress={progress1}
            $maxProgress={maxProgress1}
            {...progressBarProps}
            $boxBgColor="#F3F3F3;"
            $innerBgColor="#FFD100"
            $borderRadius="20px"
          />
          <S.RewardIconWrapper
            $isLearn={isLearn}
            $isQuest={isQuest}
            $rewardHeight={rewardHeight1}
          >
            <S.RewardIcon
              $isLearn={isLearn}
              $isQuest={isQuest}
              $rewardSrc={rewardIconSrc1}
            />
          </S.RewardIconWrapper>
        </S.ProgressBarWrapper>
      </S.QuestsWrapper>
      <S.QuestsWrapper $isLearn={isLearn} $isQuest={isQuest}>
        <S.QuestsTitle $isLearn={isLearn} $isQuest={isQuest}>
          파트 1 클리어
        </S.QuestsTitle>
        <S.ProgressBarWrapper $isLearn={isLearn} $isQuest={isQuest}>
          <S.ProgressBarIcon
            src={getImageUrl('노랑-도장.svg')}
            $isQuest={isQuest}
            $isLearn={isLearn}
          />
          <ProgressBar
            $progress={progress2}
            $maxProgress={maxProgress2}
            {...progressBarProps}
            $boxBgColor="#F3F3F3;"
            $innerBgColor="#FFD100"
            $borderRadius="20px"
          />
          <S.RewardIconWrapper
            $isLearn={isLearn}
            $isQuest={isQuest}
            $rewardHeight={rewardHeight2}
          >
            <S.RewardIcon
              $isLearn={isLearn}
              $isQuest={isQuest}
              $rewardSrc={rewardIconSrc2}
            />
          </S.RewardIconWrapper>
        </S.ProgressBarWrapper>
      </S.QuestsWrapper>
    </S.DailyQuestSection>
  );
}
