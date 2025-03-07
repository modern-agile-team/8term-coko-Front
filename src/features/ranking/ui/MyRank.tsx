import * as S from './styles';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import {
  useUserRankingQuery,
  userCosmeticItemsQuery,
} from '@features/user/queries';
import useUserStore from '@store/useUserStore';
import { isLoggedIn } from '@features/user/service/authUtils';
import MyRankSkeleton from './MyRankSkeleton';
import { useEffect } from 'react';
import RankingItem from './RankingItem';

interface MyRankProps {
  selectedOption: keyof typeof RANKING_OPTIONS;
  onRankingChange: (ranking: number) => void;
  onLoadingChange: (isLoading: boolean) => void;
}

export default function MyRank({
  selectedOption,
  onRankingChange,
  onLoadingChange,
}: MyRankProps) {
  // 자신의 랭킹 정보 (로그인한 경우만)
  const { data, isLoading } = useUserRankingQuery.getRanking(
    RANKING_OPTIONS[selectedOption].dataField
  );
  const { data: equippedItems } = userCosmeticItemsQuery.useGetEquippedItem();

  const { user } = useUserStore();

  const ranking = data?.ranking ?? 0;
  const level = user?.level ?? 0;
  const name = user?.name ?? '';

  // ranking 정보가 변경될 때마다 부모 컴포넌트에 전달
  useEffect(() => {
    if (onRankingChange) {
      onRankingChange(ranking);
    }
  }, [ranking, onRankingChange]);

  // ranking 정보 로딩 상태가 변경될 때마다 부모 컴포넌트에 전달
  useEffect(() => {
    if (onLoadingChange) {
      onLoadingChange(isLoading);
    }
  }, [isLoading, onLoadingChange]);

  if (!isLoggedIn(user)) {
    return <S.MyRankingContainer></S.MyRankingContainer>;
  }

  if (isLoading) {
    return (
      <S.MyRankingContainer>
        <MyRankSkeleton />
      </S.MyRankingContainer>
    );
  }

  return (
    <S.MyRankingContainer>
      <RankingItem
        rank={ranking}
        level={level}
        name={name}
        selectedOption={selectedOption}
        value={user?.[RANKING_OPTIONS[selectedOption].dataField] ?? 0}
        isMyRank
        equippedItems={equippedItems}
      />
    </S.MyRankingContainer>
  );
}
