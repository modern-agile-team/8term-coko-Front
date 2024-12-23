import * as S from './styles';
import SortDropdown from './SortDropdown';
import MyRank from './MyRank';
import { getImageUrl } from '@utils/getImageUrl';
import { RANKING_OPTIONS } from '@features/ranking/constant';
import type { User, RankedUser } from '@features/user/types';

interface RankingContainerProps {
  myRank: RankedUser;
  selectedOption: keyof typeof RANKING_OPTIONS;
  onOptionChange: (option: keyof typeof RANKING_OPTIONS) => void;
  users: User[];
}

export default function RankingContainer({
  myRank,
  selectedOption,
  onOptionChange,
  users,
}: RankingContainerProps) {
  const config = RANKING_OPTIONS[selectedOption];

  return (
    <S.RankingContainer>
      {/* 나의 순위 */}
      <MyRank {...myRank} selectedOption={selectedOption} />
      {/* 정렬 드롭다운 */}
      <SortDropdown
        selectedOption={selectedOption}
        onSelectOption={onOptionChange}
      />
      {/* 나머지 순위 */}
      {users.map((user, index) => (
        <S.RankingItem key={user.id} $rank={index + 1}>
          <S.MedalContainer $rank={index + 1} />
          <S.RankText>{index + 1}</S.RankText>
          <S.ProfileWrapper>
            <S.ProfileOutline src={getImageUrl('테두리.svg')} />
            <S.ProfileImg src={getImageUrl('코코-프로필.svg')} />
          </S.ProfileWrapper>
          <S.UserInfo>
            <S.UserLevelText>LV.{user.level}</S.UserLevelText>
            <S.UserNameText>{user.nickname}</S.UserNameText>
          </S.UserInfo>
          <S.Container>
            <S.RankIconWrapper>
              <S.RankIcon src={getImageUrl(config.icon)} />
              <S.RankIconText>{user[config.dataField]}</S.RankIconText>
            </S.RankIconWrapper>
            <S.AddFriend>+ 친구 추가</S.AddFriend>
          </S.Container>
        </S.RankingItem>
      ))}
    </S.RankingContainer>
  );
}
