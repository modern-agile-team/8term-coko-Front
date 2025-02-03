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
    currentPage,
    RANKING_OPTIONS[selectedOption].dataField
  );

  const myRank = {
    id: 5,
    name: 'gwgwgwgwgw5',
    level: 10,
    point: 190,
    rank: 4,
    createdAt: '2021-10-04',
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
        {/* 향후 화살표 모양 다음/이전 버튼 및 페이지 많아짐에 따라 보여줘야 할 페이지 버튼 제한 예정 */}
        <S.RankingPaginationDiv>
          {[...Array(ranking?.totalPage)].map((_, index) => (
            <S.RankingPaginationButton
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              $isSelected={index + 1 === currentPage}
            >
              {index + 1}
            </S.RankingPaginationButton>
          ))}
        </S.RankingPaginationDiv>
      </globalS.Layout>
    </>
  );
}
