import { useState } from 'react';
import { getImageUrl } from '@utils/getImageUrl';
import * as globalS from '@/style/style';
import * as S from './styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import CokoLogo from '@common/layout/CokoLogo';
import RankingContainer from '@features/ranking/ui/RankingContainer';
import { RANKING_OPTIONS } from '@features/ranking/constant';

export default function Ranking() {
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof RANKING_OPTIONS>('포인트 보유순');
  const dummyUsers = [
    { id: 2, nickname: 'gwgw2', level: 4, point: 200 },
    { id: 3, nickname: 'gwgwgw3', level: 2, point: 5000 },
    { id: 4, nickname: 'gwgwgwgw4', level: 3, point: 160 },
    { id: 5, nickname: 'gwgwgwgwgw5', level: 10, point: 190 },
    { id: 6, nickname: 'gwgwgwgwgwgw6', level: 12, point: 230 },
    { id: 7, nickname: 'gwgwgwgwgwgwgw7', level: 1, point: 3000 },
  ];

  const myRank = {
    id: 5,
    nickname: 'gwgwgwgwgw5',
    level: 10,
    point: 190,
    rank: 4,
  };

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <CokoLogo />
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
          users={dummyUsers}
        />
      </globalS.Layout>
    </>
  );
}
