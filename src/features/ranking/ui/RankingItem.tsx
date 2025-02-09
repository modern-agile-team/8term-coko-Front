import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { RANKING_OPTIONS } from '@features/ranking/constants';

interface RankingItemProps {
  rank: number;
  level: number;
  name: string;
  selectedOption: keyof typeof RANKING_OPTIONS;
  value: number;
  isMyRank?: boolean;
}

export default function RankingItem({
  rank,
  level,
  name,
  selectedOption,
  value,
  isMyRank = false,
}: RankingItemProps) {
  return (
    <S.RankingItem $rank={rank}>
      <S.MedalContainer $rank={rank} $isMyRank={isMyRank}>
        {isMyRank && (
          <S.MyRankTextWrapper $rank={rank}>
            <label>나의 순위</label>
            <span>{rank}</span>
          </S.MyRankTextWrapper>
        )}
      </S.MedalContainer>
      {!isMyRank && <S.RankText>{rank}</S.RankText>}
      <S.ProfileWrapper>
        <img src={getImageUrl('테두리.svg')} />
        <img src={getImageUrl('코코-프로필.svg')} />
      </S.ProfileWrapper>
      <S.UserInfo>
        <p>LV.{level}</p>
        <p>{name}</p>
      </S.UserInfo>
      <S.Container>
        <S.RankIconWrapper>
          <img src={getImageUrl(RANKING_OPTIONS[selectedOption].icon)} />
          <p>{value}</p>
        </S.RankIconWrapper>
        <S.AddFriend>+ 친구 추가</S.AddFriend>
      </S.Container>
    </S.RankingItem>
  );
}
