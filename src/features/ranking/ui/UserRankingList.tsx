import * as S from './styles';
import SortDropdown from '@common/layout/SortDropdown';
import RankingTimer from './RankingTimer';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import { rankingPaginationQuery } from '@features/ranking/queries';
import UserRankingListSkeleton from './UserRankingListSkeleton';
import { generatePaginationPages } from '@utils/generatePaginationPages';
import RankingItem from './RankingItem';

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
  const { data, isLoading } = rankingPaginationQuery.useGetRankingByPage(
    RANKING_OPTIONS[selectedOption].dataField,
    currentPage
  );
  const totalPage = data?.totalPage ?? 1;
  const pages = generatePaginationPages({
    currentPage,
    totalPage,
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
      <S.RankingControlsWrapper>
        {/* 시즌 종료까지 남은 시간 */}
        <RankingTimer />
        {/* 정렬 드롭다운 */}
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
      </S.RankingControlsWrapper>

      {/* 전체 유저 랭킹 리스트 */}
      {isLoading ? (
        <UserRankingListSkeleton />
      ) : (
        data?.contents.map((user, index) => {
          const rank = (currentPage - 1) * limit + (index + 1);
          const equippedItems = data.equippedItems[index].map(
            item => item.item
          );
          return (
            <RankingItem
              key={user.id}
              rank={rank}
              level={user.level}
              name={user.name}
              selectedOption={selectedOption}
              equippedItems={equippedItems}
              value={user[RANKING_OPTIONS[selectedOption].dataField]}
            />
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
