import { useState } from 'react';
import * as globalS from '@style/styles';
import * as S from './styles';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import ItemContainer from '@features/store/ui/ItemContainer';
import CartList from '@features/store/ui/CartList';
import MyCharacter from '@features/user/ui/MyCharacter';
import ProfileImage from '@features/user/ui/ProfileImage';
import type { CosmeticItem } from '@features/store/types';
import { getViewportSize, isMobile } from '@modern-kit/utils';
import useModal from '@/hooks/useModal';
import { useToggle } from '@modern-kit/react';

const buttonList: { label: string; name: CosmeticItem['category'] }[] = [
  {
    label: '의상',
    name: 'clothes',
  },
  {
    label: '악세사리',
    name: 'accessories',
  },
  {
    label: '프로필',
    name: 'profile',
  },
  {
    label: '색상',
    name: 'color',
  },
] as const;
export default function Store() {
  const [itemQuery, setItemQuery] =
    useState<CosmeticItem['category']>('clothes');
  const [isCartOpne, toggleIsCartOpen] = useToggle(true);

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <CartList isMobileHidden={isCartOpne} />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <S.MyCharacterSection>
          <div>
            <S.StoreButton $backgroundColor="#49FF87" $borderColor="#01F152">
              내가 구매한 아이템
            </S.StoreButton>
            <S.StoreButton $backgroundColor="#FF4949" $borderColor="#E8080C">
              초기화
            </S.StoreButton>
          </div>
          <div>
            {itemQuery === 'profile' ? (
              <ProfileImage isIcon={false} />
            ) : (
              <MyCharacter />
            )}
          </div>
          <div>
            <S.StoreButton
              $backgroundColor="#FFB53D"
              $borderColor="#F09900"
              onClick={toggleIsCartOpen}
            >
              장바구니
            </S.StoreButton>
          </div>
        </S.MyCharacterSection>
        <S.StoreItemListSection>
          <S.FilterListContainer>
            {buttonList.map(item => (
              <S.FilterButton
                key={item.name}
                onClick={() => setItemQuery(item.name)}
                $isSelect={itemQuery === item.name}
              >
                {item.label}
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
