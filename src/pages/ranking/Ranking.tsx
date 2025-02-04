import { useState } from 'react';
import { getImageUrl } from '@utils/getImageUrl';
import * as globalS from '@style/styles';
import * as S from './styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import RankingContainer from '@features/ranking/ui/RankingContainer';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import { useRankingPaginationQuery } from '@features/ranking/queries';

export default function Ranking() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof RANKING_OPTIONS>('레벨순');

  const { data: ranking } = useRankingPaginationQuery.getRankingByPage(
    RANKING_OPTIONS[selectedOption].dataField,
    currentPage
  );

  const totalPage = ranking?.totalPage ?? 1;

  const myRank = {
    id: 5,
    name: 'gwgwgwgwgw5',
    level: 10,
    point: 190,
    rank: 4,
    createdAt: '2021-10-04',
  };

  /** 이전 페이지로 이동 */
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  /** 다음 페이지로 이동 */
  const handleNextPage = () => {
    if (currentPage < totalPage) setCurrentPage(prev => prev + 1);
  };

  /** 특정 페이지로 이동 */
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  /** 페이지 버튼 계산 */
  const getPaginationPages = () => {
    const MAX_VISIBLE = 7; // 최대 노출할 페이지 버튼 개수
    const pages: (number | string)[] = [];

    // 전체 페이지가 MAX_VISIBLE 이하라면 모두 표시
    if (totalPage <= MAX_VISIBLE) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
      return pages;
    }

    // 최대 노출 버튼이 7개인 경우, 항상 첫 페이지와 마지막 페이지는 표시
    // 가운데에 (MAX_VISIBLE - 2)개 버튼(여기선 5개)을 현재 페이지 중심으로 표시
    const WINDOW_SIZE = MAX_VISIBLE - 2; // 슬라이딩 윈도우 크기 (예: 5)

    // 현재 페이지를 중심으로 시작 페이지 계산
    let startPage = Math.max(2, currentPage - Math.floor(WINDOW_SIZE / 2));
    let endPage = startPage + WINDOW_SIZE - 1;

    // 만약 endPage가 마지막 전 페이지(totalPage - 1)보다 크다면 윈도우를 뒤로 당김
    if (endPage > totalPage - 1) {
      endPage = totalPage - 1;
      startPage = endPage - WINDOW_SIZE + 1;
    }

    // 첫 페이지는 항상 추가
    pages.push(1);

    // 첫 페이지와 슬라이딩 윈도우 시작 사이에 공백이 있다면 ellipsis 추가
    if (startPage > 2) {
      pages.push('···');
    }

    // 슬라이딩 윈도우 페이지 추가
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // 슬라이딩 윈도우 끝과 마지막 페이지 사이에 공백이 있다면 ellipsis 추가
    if (endPage < totalPage - 1) {
      pages.push('···');
    }

    // 마지막 페이지 추가
    pages.push(totalPage);

    return pages;
  };

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <S.BarrelTopCokoImg src={getImageUrl('통-위-코코.svg')} />
          <S.BarrelContainer $rank={myRank.rank} />
          <S.BoatSayImg src={getImageUrl('배-멘트.svg')} />
          <S.BoatImg src={getImageUrl('배.svg')} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <RankingContainer
          myRank={myRank}
          selectedOption={selectedOption}
          onOptionChange={setSelectedOption}
          users={ranking?.contents}
          currentPage={currentPage}
          limit={5}
        />
        <S.RankingPaginationDiv>
          <S.RankingPaginationButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ◀
          </S.RankingPaginationButton>

          {getPaginationPages().map((page, index) =>
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
      </globalS.Layout>
    </>
  );
}
