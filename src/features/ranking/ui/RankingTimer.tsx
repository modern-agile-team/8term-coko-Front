import * as S from './styles';
import { useState, useCallback } from 'react';
import { useInterval } from '@modern-kit/react';
import { rankingSeasonQuery } from '@features/ranking/queries';
import { getImageUrl } from '@/utils/getImageUrl';

export default function RankingTimer() {
  const { data } = rankingSeasonQuery.useGetSeasonEndTime();

  const getTimeLeftString = useCallback(() => {
    if (!data?.seasonEndTime) return '';

    const endTime = new Date(data.seasonEndTime).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, endTime - now);

    if (diff === 0) return '시즌 종료';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `시즌 종료일: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`;
  }, [data]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeftString);

  useInterval(
    () => {
      setTimeLeft(getTimeLeftString());
    },
    {
      delay: 1000,
      enabled: !!data,
    }
  );

  return (
    <S.TimerContainer>
      <img src={getImageUrl('알림.svg')} alt="랭킹 시즌 종료 알림" />
      <span>{timeLeft}</span>
    </S.TimerContainer>
  );
}
