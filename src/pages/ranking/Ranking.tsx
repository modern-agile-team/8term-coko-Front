import { useState } from 'react';
import { getImageUrl } from '@utils/getImageUrl';
import * as globalS from '@style/styles';
import * as S from './styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import usePreloadImages from '@hooks/usePreloadImages';
import { PRELOAD_IMAGES, RANKING_OPTIONS } from '@features/ranking/constants';
import MyRank from '@features/ranking/ui/MyRank';
import UserRankingList from '@/features/ranking/ui/UserRankingList';
import BarrelContainerSkeleton from '@features/ranking/ui/BarrelContainerSkeleton';

export default function Ranking() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof RANKING_OPTIONS>('레벨순');
  const [myRanking, setMyRanking] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  usePreloadImages({ imageUrls: PRELOAD_IMAGES });

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <S.BarrelTopCokoImg src={getImageUrl('통-위-코코.svg')} />
          {isLoading ? (
            <BarrelContainerSkeleton />
          ) : (
            <S.BarrelContainer $rank={myRanking} />
          )}
          <S.BoatSayImg src={getImageUrl('배-멘트.svg')} />
          <S.BoatImg src={getImageUrl('배.svg')} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        {/* 나의 랭킹 컴포넌트 */}
        <MyRank
          selectedOption={selectedOption}
          onRankingChange={setMyRanking}
          onLoadingChange={setIsLoading}
        />

        {/* 전체 유저 랭킹 리스트 */}
        <UserRankingList
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectedOption={selectedOption}
          onOptionChange={setSelectedOption}
        />
        <S.UserRankingListMargin />
      </globalS.Layout>
    </>
  );
}
