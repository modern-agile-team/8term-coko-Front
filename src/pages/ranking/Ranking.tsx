import { useState } from 'react';
import * as globalS from '@/style/style';
import * as S from './styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import CokoLogo from '@common/layout/CokoLogo';
import { getImageUrl } from '@utils/getImageUrl';
import RankingContainer from '@/features/ranking/ui/RankingContainer';

export default function Ranking() {
  const [myRank, setMyRank] = useState<number | null>(null);

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
          <S.BarrelContainer $rank={myRank} />
          <S.BoatSayImg src={getImageUrl('배-멘트.svg')} />
          <S.BoatImg src={getImageUrl('배.svg')} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <RankingContainer onMyRankChange={setMyRank} />
      </globalS.Layout>
    </>
  );
}
