import { useLocation } from 'react-router-dom';
import { DailyQuestSection, TextOverlay } from '../style';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function DailyQuest() {
  const location = useLocation();

  // URL에 따라 스타일 변경
  const isLearn = location.pathname === '/learn';
  const isQuest = location.pathname === '/quest';

  return (
    <DailyQuestSection $isLearn={isLearn} $isQuest={isQuest}>
      <img src={`${imgUrl}폭탄-아이콘.svg`} alt="폭탄 아이콘" />
      <TextOverlay>오늘의 퀘스트</TextOverlay>
    </DailyQuestSection>
  );
}
