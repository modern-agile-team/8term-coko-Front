import { useState } from 'react';
import * as globalS from '@style/styles';
import * as S from './styles';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import ItemContainer from '@features/store/ui/ItemContainer';
import CartList from '@features/store/ui/CartList';
import MyCharacter from '@features/user/ui/MyCharacter';
import ProfileImage from '@features/user/ui/ProfileImage';
import { useToggle } from '@modern-kit/react';
import {
  ACCESSPRIES_OPTIONS,
  BUTTION_LIST,
  CLOTHES_OPTIONS,
} from '@/features/store/constants';
import StoreSortBar from '@/features/store/ui/StoreSortBar';
import { contains } from '@modern-kit/utils';
import { CosmeticItemOption } from '@/features/store/types';

export default function Store() {
  const [itemQuery, setItemQuery] = useState<string>('all');
  const [isCartOpne, toggleIsCartOpen] = useToggle(true);
  const [isMyItem, toggleIsMyItem] = useToggle();

  const checkShouldClearLabel = (options: CosmeticItemOption[]) => {
    return contains(
      options.map(option => option.value),
      itemQuery
    );
  };

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
            <S.StoreButton
              $backgroundColor="#49FF87"
              $borderColor="#01F152"
              onClick={toggleIsMyItem}
            >
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
            <StoreSortBar
              items={CLOTHES_OPTIONS}
              setItemQuery={setItemQuery}
              shouldClearLabel={checkShouldClearLabel(ACCESSPRIES_OPTIONS)}
            />
            <StoreSortBar
              items={ACCESSPRIES_OPTIONS}
              setItemQuery={setItemQuery}
              shouldClearLabel={checkShouldClearLabel(CLOTHES_OPTIONS)}
            />
            {BUTTION_LIST.map(item => (
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
          <ItemContainer query={itemQuery} isMyItem={isMyItem} />
        </S.StoreItemListSection>
      </globalS.Layout>
    </>
  );
}
