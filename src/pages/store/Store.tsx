import CokoLogo from '@common/layout/CokoLogo';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import * as globalS from '@/style/style';
import * as S from './styles';
import { useState } from 'react';
import ItemContainer from '@features/store/ui/ItemContainer';
import CartList from '@features/store/ui/CartList';
import MyCharacter from '@features/user/ui/MyCharacter';
import ProfileImage from '@features/user/ui/ProfileImage';
const buttonLabelList = ['의상', '악세사리', '프로필', '색상'] as const;
export default function Store() {
  const [itemQuery, setItemQuery] =
    useState<(typeof buttonLabelList)[number]>('의상');
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
            <CartList query={itemQuery} />
          </S.CartListWrapper>
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <S.MyCharacterSection>
          <div>
            <S.Button>내가 구매한 아이템</S.Button>
            <S.Button>초기화</S.Button>
          </div>
          {itemQuery === '프로필' ? <ProfileImage /> : <MyCharacter />}
        </S.MyCharacterSection>
        <S.StoreItemListSection>
          <S.FilterListContainer>
            {buttonLabelList.map(label => (
              <S.FilterButton
                key={label}
                onClick={() => setItemQuery(label)}
                $isSelect={itemQuery === label}
              >
                {label}
              </S.FilterButton>
            ))}
          </S.FilterListContainer>
          <S.RedLine />
          <ItemContainer query={itemQuery} />
        </S.StoreItemListSection>
      </globalS.Layout>
    </>
  );
}
