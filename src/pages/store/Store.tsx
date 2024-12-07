import CokoLogo from '@common/layout/CokoLogo';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import * as globalS from '@/style/style';
import * as S from './styles';

export default function Store() {
  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <CokoLogo />
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <S.CartListWrapper>
            <S.Label>장바구니</S.Label>
          </S.CartListWrapper>
        </globalS.RightSection>
        <globalS.Layout></globalS.Layout>
      </globalS.Wrapper>
    </>
  );
}
