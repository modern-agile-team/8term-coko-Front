import { getImageUrl } from '@/utils/getImageUrl';
import rankingOptions from '../service/rankingOptions';
import * as S from './styles';

interface MyRankProps {
  rank: number;
  nickname: string;
  level: number;
  point: number;
  selectedOption: string;
}

export default function MyRank({
  rank,
  nickname,
  level,
  point,
  selectedOption,
}: MyRankProps) {
  const user = { level, point };
  const config = rankingOptions[selectedOption];

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
