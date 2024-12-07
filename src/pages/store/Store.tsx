import CokoLogo from '@common/layout/CokoLogo';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import * as globalS from '@/style/style';
import * as S from './styles';
import { useState } from 'react';
import ItemContainer from '@/features/store/ui/ItemContainer';
import CartList from '@features/store/ui/CartList';
const buttonLabelList = ['의상', '악세사리', '프로필', '색상'] as const;
export default function Store() {
  const [selectButton, setSelectButton] =
    useState<(typeof buttonLabelList)[number]>();
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
            <CartList></CartList>
          </S.CartListWrapper>
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <S.MyCharacterSection>
          <div>
            <S.Button>내가 구매한 아이템</S.Button>
            <S.Button>초기화</S.Button>
          </div>
          <div>
            <div>대충 캐릭터</div>
            <div>대충 포인트</div>
          </div>
        </S.MyCharacterSection>
        <S.StoreItemListSection>
          <S.FilterListContainer>
            {buttonLabelList.map(label => (
              <S.FilterButton
                key={label}
                onClick={() => setSelectButton(label)}
                $isSelect={selectButton === label}
              >
                {label}
              </S.FilterButton>
            ))}
          </S.FilterListContainer>
          <S.RedLine />
          <ItemContainer></ItemContainer>
        </S.StoreItemListSection>
      </globalS.Layout>
    </>
  );
}
