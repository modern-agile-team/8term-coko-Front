import { useState, useEffect, useCallback } from 'react';
import { useInterval } from '@modern-kit/react';
import { rankingSeasonQuery } from '@features/ranking/queries';

export default function RankingTimer() {
  const { data } = rankingSeasonQuery.useGetSeasonEndTime();
  const [timeLeft, setTimeLeft] = useState<string>('');

  const updateCountdown = useCallback(() => {
    if (!data?.seasonEndTime) return;

    const endTime = new Date(data.seasonEndTime).getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, endTime - now);

    if (diff === 0) {
      setTimeLeft('시즌 종료');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeLeft(
      `시즌 종료일: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남음`
    );
  }, [data]);

  useInterval(updateCountdown, {
    delay: 1000,
    enabled: !!data,
  });

  useEffect(() => {
    if (data?.seasonEndTime) {
      updateCountdown();
    }
  }, [data, updateCountdown]);

  return <div>{timeLeft}</div>;
}
