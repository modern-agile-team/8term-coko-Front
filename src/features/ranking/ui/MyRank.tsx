import { getImageUrl } from '@utils/getImageUrl';
import { RANKING_OPTIONS } from '@features/ranking/constant';
import * as S from './styles';
import type Rank from '@type/Rank';

interface MyRankProps extends Rank {
  selectedOption: keyof typeof RANKING_OPTIONS;
}

export default function MyRank({
  rank,
  nickname,
  level,
  point,
  selectedOption,
}: MyRankProps) {
  const user = { level, point };
  const config = RANKING_OPTIONS[selectedOption];

  return (
    <S.RankingItem $rank={rank}>
      <S.MedalContainer $rank={rank} $isMyRank>
        <S.MyRankTextWrapper $rank={rank}>
          <S.MyRankLabel>나의 순위</S.MyRankLabel>
          <S.MyRankNumber>{rank}</S.MyRankNumber>
        </S.MyRankTextWrapper>
      </S.MedalContainer>
      <S.ProfileWrapper>
        <S.ProfileOutline src={getImageUrl('테두리.svg')} />
        <S.ProfileImg src={getImageUrl('코코-프로필.svg')} />
      </S.ProfileWrapper>
      <S.UserInfo>
        <S.UserLevelText>LV.{level}</S.UserLevelText>
        <S.UserNameText>{nickname}</S.UserNameText>
      </S.UserInfo>
      <S.Container>
        <S.RankIconWrapper>
          <S.RankIcon src={getImageUrl(config.icon)} />
          <S.RankIconText>{user[config.dataField]}</S.RankIconText>
        </S.RankIconWrapper>
        <S.AddFriend>+ 친구 추가</S.AddFriend>
      </S.Container>
    </S.RankingItem>
  );
}
