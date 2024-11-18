import { useLocation } from 'react-router-dom';
import {
  DailyQuestSection,
  QuestContent,
  QuestIcon,
  DailyQuestText,
  QuestsWrapper,
  QuestsTitle,
  ProgressBarWrapper,
  RewardIcon,
} from '../style';
import ProgressBar from '../../progress/ui/ProgressBar';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function DailyQuest() {
  const location = useLocation();

  // URL에 따라 스타일 변경
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  // 임시 데이터
  const progress1 = 30;
  const progress2 = 70;
  const maxProgress1 = 100;
  const maxProgress2 = 100;

  return (
    <DailyQuestSection $isLearn={isLearn} $isQuest={isQuest}>
      <QuestContent>
        <QuestIcon src={`${imgUrl}폭탄-아이콘.svg`} alt="폭탄 아이콘" />
        <DailyQuestText>오늘의 퀘스트</DailyQuestText>
      </QuestContent>
      <QuestsWrapper>
        <QuestsTitle>문제 4개 풀기</QuestsTitle>
        <ProgressBarWrapper>
          <ProgressBar
            $progress={progress1}
            $maxProgress={maxProgress1}
            $maxWidth="172px"
            $height="13px"
            $boxBgColor="#F3F3F3;"
            $innerBgColor="#F9012F"
          />
          <RewardIcon src={`${imgUrl}과일바구니.svg`} />
        </ProgressBarWrapper>
      </QuestsWrapper>
      <QuestsWrapper>
        <QuestsTitle>챕터 1 풀기</QuestsTitle>
        <ProgressBarWrapper>
          <ProgressBar
            $progress={progress2}
            $maxProgress={maxProgress2}
            $maxWidth="172px"
            $height="13px"
            $boxBgColor="#F3F3F3;"
            $innerBgColor="#FFD100;"
          />
          <RewardIcon src={`${imgUrl}포인트.svg`} />
        </ProgressBarWrapper>
      </QuestsWrapper>
    </DailyQuestSection>
  );
}
