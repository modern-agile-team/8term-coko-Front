import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import SortDropdown from '@common/layout/SortDropdown';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import { useRankingPaginationQuery } from '@features/ranking/queries';
import UserRankingListSkeleton from './UserRankingListSkeleton';
import { generatePaginationPages } from '@utils/generatePaginationPages';

interface UserRankingListProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  selectedOption: keyof typeof RANKING_OPTIONS;
  onOptionChange: (option: keyof typeof RANKING_OPTIONS) => void;
}

export default function UserRankingList({
  currentPage,
  setCurrentPage,
  selectedOption,
  onOptionChange,
}: UserRankingListProps) {
  // 전체 유저 랭킹 정보 (페이지네이션)
  const { data, isLoading } = useRankingPaginationQuery.getRankingByPage(
    RANKING_OPTIONS[selectedOption].dataField,
    currentPage
  );

  const totalPage = data?.totalPage ?? 1;
  const pages = generatePaginationPages({
    currentPage,
    totalPage,
    maxVisible: 7,
  });

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const limit = 5;

  return (
    <S.UserRankingListContainer>
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

      {/* 전체 유저 랭킹 리스트 */}
      {isLoading ? (
        <UserRankingListSkeleton />
      ) : (
        data?.contents.map((user, index) => {
          const rank = (currentPage - 1) * limit + (index + 1);
          return (
            <S.RankingItem key={user.id} $rank={rank}>
              <S.MedalContainer $rank={rank} />
              <S.RankText>{rank}</S.RankText>
              <S.ProfileWrapper>
                <img src={getImageUrl('테두리.svg')} />
                <img src={getImageUrl('코코-프로필.svg')} />
              </S.ProfileWrapper>
              <S.UserInfo>
                <p>LV.{user.level}</p>
                <p>{user.name}</p>
              </S.UserInfo>
              <S.Container>
                <S.RankIconWrapper>
                  <img
                    src={getImageUrl(RANKING_OPTIONS[selectedOption].icon)}
                  />
                  <p>{user[RANKING_OPTIONS[selectedOption].dataField]}</p>
                </S.RankIconWrapper>
                <S.AddFriend>+ 친구 추가</S.AddFriend>
              </S.Container>
            </S.RankingItem>
          );
        })
      )}

      {/* 페이지네이션 */}
      <S.RankingPaginationDiv>
        <S.RankingPaginationButton
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          ◀
        </S.RankingPaginationButton>
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <S.RankingPaginationButton
              key={index}
              onClick={() => handlePageClick(page)}
              $isSelected={page === currentPage}
            >
              {page}
            </S.RankingPaginationButton>
          ) : (
            <span key={index}>···</span>
          )
        )}
        <S.RankingPaginationButton
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
        >
          ▶
        </S.RankingPaginationButton>
      </S.RankingPaginationDiv>
    </S.UserRankingListContainer>
  );
}
