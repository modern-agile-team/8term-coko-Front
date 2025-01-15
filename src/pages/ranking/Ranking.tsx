import { useState } from 'react';
import { getImageUrl } from '@utils/getImageUrl';
import * as globalS from '@/style/styles';
import * as S from './styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import RankingContainer from '@features/ranking/ui/RankingContainer';
import { RANKING_OPTIONS } from '@features/ranking/constants';

export default function Ranking() {
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof RANKING_OPTIONS>('포인트 보유순');
  const dummyUsers = [
    { id: 2, name: 'gwgw2', level: 4, point: 200, createdAt: '2021-10-01' },
    { id: 3, name: 'gwgwgw3', level: 2, point: 5000, createdAt: '2021-10-02' },
    { id: 4, name: 'gwgwgwgw4', level: 3, point: 160, createdAt: '2021-10-03' },
    {
      id: 5,
      name: 'gwgwgwgwgw5',
      level: 10,
      point: 190,
      createdAt: '2021-10-04',
    },
    {
      id: 6,
      name: 'gwgwgwgwgwgw6',
      level: 12,
      point: 230,
      createdAt: '2021-10-05',
    },
    {
      id: 7,
      name: 'gwgwgwgwgwgwgw7',
      level: 1,
      point: 3000,
      createdAt: '2021-10-06',
    },
  ];

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
          users={dummyUsers}
        />
      </globalS.Layout>
    </>
  );
}
