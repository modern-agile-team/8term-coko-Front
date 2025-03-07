import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import { CosmeticItem } from '@/features/store/types';
import ProfileImage from '@/features/user/ui/ProfileImage';

interface RankingItemProps {
  rank: number;
  level: number;
  name: string;
  selectedOption: keyof typeof RANKING_OPTIONS;
  value: number;
  isMyRank?: boolean;
  equippedItems?: CosmeticItem[];
}

export default function RankingItem({
  rank,
  level,
  name,
  selectedOption,
  value,
  isMyRank = false,
  equippedItems,
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
        <ProfileImage equippedItems={equippedItems} size="md" />
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
      </S.Container>
    </S.RankingItem>
  );
}
