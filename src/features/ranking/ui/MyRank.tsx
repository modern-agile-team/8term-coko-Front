import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';

interface MyRankProps {
  rank: number;
  nickname: string;
  level: number;
  point: number;
}

export default function MyRank({ rank, nickname, level, point }: MyRankProps) {
  return (
    <S.RankingItem $rank={rank}>
      <S.MedalImg $rank={rank} $isMyRank>
        <S.MyRankTextWrapper $rank={rank}>
          <S.MyRankLabel>나의 순위</S.MyRankLabel>
          <S.MyRankNumber>{rank}</S.MyRankNumber>
        </S.MyRankTextWrapper>
      </S.MedalImg>
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
          <S.RankIcon src={getImageUrl('포인트.svg')} />
          <S.RankIconText>{point}</S.RankIconText>
        </S.RankIconWrapper>
        <S.AddFriend>+ 친구 추가</S.AddFriend>
      </S.Container>
    </S.RankingItem>
  );
}
