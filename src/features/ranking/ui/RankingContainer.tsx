import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import MyRank from './MyRank';
import SortDropdown from '@common/layout/SortDropdown';
import { RANKING_OPTIONS } from '@/features/ranking/constants';
import type { RankedUser } from '@features/user/types';
import type { RankingPagination } from '@features/ranking/types';

interface RankingContainerProps {
  myRank: RankedUser;
  selectedOption: keyof typeof RANKING_OPTIONS;
  onOptionChange: (option: keyof typeof RANKING_OPTIONS) => void;
  users: RankingPagination['contents'];
  currentPage: number;
  limit: number;
}

export default function RankingContainer({
  myRank,
  selectedOption,
  onOptionChange,
  users,
  currentPage,
  limit,
}: RankingContainerProps) {
  const config = RANKING_OPTIONS[selectedOption];

  return (
    <S.RankingContainer>
      {/* 나의 순위 */}
      <MyRank {...myRank} selectedOption={selectedOption} />

      {/* 정렬 드롭다운 */}
      <S.SortDropdownWrapper>
        <SortDropdown
          options={RANKING_OPTIONS}
          selectedOption={selectedOption}
          onSelectOption={onOptionChange}
          width="136px"
          height="30px"
          iconSize="10px"
          iconRight="15px"
          fontSize="12px"
          ulFontColor="#FFF3C0"
          liFontColor="#D37744"
          ulBackgroundColor="#d37744"
          liBackgroundColor="#fff3c0"
          borderColor="#c26b3b"
        />
      </S.SortDropdownWrapper>

      {/* 나머지 순위 */}
      {users.map((user, index) => {
        const rank = (currentPage - 1) * limit + (index + 1);
        return (
          <S.RankingItem key={user.id} $rank={rank}>
            <S.MedalContainer $rank={rank} />
            <S.RankText>{rank}</S.RankText>
            <S.ProfileWrapper>
              <S.ProfileOutline src={getImageUrl('테두리.svg')} />
              <S.ProfileImg src={getImageUrl('코코-프로필.svg')} />
            </S.ProfileWrapper>
            <S.UserInfo>
              <S.UserLevelText>LV.{user.level}</S.UserLevelText>
              <S.UserNameText>{user.name}</S.UserNameText>
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
      })}
    </S.RankingContainer>
  );
}
