import { useState } from 'react';
import { getImageUrl } from '@utils/getImageUrl';
import * as globalS from '@style/styles';
import * as S from './styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import RankingContainer from '@features/ranking/ui/RankingContainer';
import { RANKING_OPTIONS } from '@features/ranking/constants';
import usePreloadImages from '@hooks/usePreloadImages';
import { PRELOAD_IMAGES } from '@features/ranking/constants';
import {
  useUserRankingQuery,
  useRankingPaginationQuery,
} from '@features/ranking/queries';
import useUserStore from '@/store/useUserStore';
import { isLoggedIn } from '@features/user/service/authUtils';
import Skeleton from '@common/layout/Skeleton';

import { generatePaginationPages } from '@utils/generatePaginationPages';
import type { RankedUser } from '@/features/user/types';

export default function Ranking() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof RANKING_OPTIONS>('레벨순');

  usePreloadImages({ imageUrls: PRELOAD_IMAGES });

  // 유저 전체 랭킹 정보 (페이지네이션)
  const { data: userRanking, isLoading: isUserRankingLoading } =
    useRankingPaginationQuery.getRankingByPage(
      RANKING_OPTIONS[selectedOption].dataField,
      currentPage
    );

  const { user } = useUserStore();

  // 자신의 랭킹 정보 (로그인한 경우만)
  const { data: myRanking, isLoading: isMyRankingLoading } = isLoggedIn(user)
    ? useUserRankingQuery.getRanking(RANKING_OPTIONS[selectedOption].dataField)
    : { data: null, isLoading: false };

  // 유저 정보와 쿼리 데이터를 병합하여 full RankedUser 객체 생성
  const myRank: RankedUser = {
    id: user?.id ?? 0,
    name: user?.name ?? '',
    level: user?.level ?? 0,
    point: user?.point ?? 0,
    createdAt: user?.createdAt ?? '',
    ranking: myRanking?.ranking ?? 0,
  };

  const totalPage = userRanking?.totalPage ?? 1;

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) setCurrentPage(prev => prev + 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const pages = generatePaginationPages({
    currentPage,
    totalPage,
    maxVisible: 7,
  });

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <S.BarrelTopCokoImg src={getImageUrl('통-위-코코.svg')} />

          {isMyRankingLoading ? (
            <Skeleton
              width="170px"
              height="155px"
              style={{
                margin: '237px 87px',
                position: 'fixed',
                zIndex: '-1',
                borderRadius: '30px',
              }}
            />
          ) : (
            <S.BarrelContainer $rank={myRank.ranking} />
          )}

          <S.BoatSayImg src={getImageUrl('배-멘트.svg')} />
          <S.BoatImg src={getImageUrl('배.svg')} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <RankingContainer
          myRank={myRank}
          selectedOption={selectedOption}
          onOptionChange={setSelectedOption}
          users={userRanking?.contents ?? []}
          currentPage={currentPage}
          limit={5}
          isUserRankingLoading={isUserRankingLoading}
          isMyRankingLoading={isLoggedIn(user) ? isMyRankingLoading : false}
        />
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
      </globalS.Layout>
    </>
  );
}
