import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import { useUserRankingQuery } from '@features/user/queries';
import useUserStore from '@store/useUserStore';
import { isLoggedIn } from '@features/user/service/authUtils';
import MyRankSkeleton from './MyRankSkeleton';
import { useEffect } from 'react';

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
  const { user } = useUserStore();

  // 자신의 랭킹 정보 (로그인한 경우만)
  const { data, isLoading } = isLoggedIn(user)
    ? useUserRankingQuery.getRanking(RANKING_OPTIONS[selectedOption].dataField)
    : { data: null, isLoading: false };

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
      <S.RankingItem $rank={ranking}>
        <S.MedalContainer $rank={ranking} $isMyRank>
          <S.MyRankTextWrapper $rank={ranking}>
            <S.MyRankLabel>나의 순위</S.MyRankLabel>
            <S.MyRankNumber>{ranking}</S.MyRankNumber>
          </S.MyRankTextWrapper>
        </S.MedalContainer>
        <S.ProfileWrapper>
          <S.ProfileOutline src={getImageUrl('테두리.svg')} />
          <S.ProfileImg src={getImageUrl('코코-프로필.svg')} />
        </S.ProfileWrapper>
        <S.UserInfo>
          <S.UserLevelText>LV.{level}</S.UserLevelText>
          <S.UserNameText>{name}</S.UserNameText>
        </S.UserInfo>
        <S.Container>
          <S.RankIconWrapper>
            <S.RankIcon
              src={getImageUrl(RANKING_OPTIONS[selectedOption].icon)}
            />
            <S.RankIconText>
              {user?.[RANKING_OPTIONS[selectedOption].dataField] ?? 0}
            </S.RankIconText>
          </S.RankIconWrapper>
          <S.AddFriend>+ 친구 추가</S.AddFriend>
        </S.Container>
      </S.RankingItem>
    </S.MyRankingContainer>
  );
}
