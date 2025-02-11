import * as globalS from '@style/styles';
import * as S from './styles';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import ItemContainer from '@features/store/ui/ItemContainer';
import { useUnmount } from '@modern-kit/react';
import {
  ACCESSORIES_OPTIONS,
  BUTTON_LIST,
  CLOTHES_OPTIONS,
} from '@/features/store/constants';
import StoreSortBar from '@/features/store/ui/StoreSortBar';
import StoreMyCharacterSection from '@/features/user/ui/StoreMyCharacterSection';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';

export default function Store() {
  const { query, setQuery, resetEquippedItem } = useCosmeticItemStore();
  useUnmount(resetEquippedItem);

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <StoreMyCharacterSection />
        <S.StoreItemListSection>
          <S.FilterListContainer>
            <StoreSortBar items={CLOTHES_OPTIONS} />
            <StoreSortBar items={ACCESSORIES_OPTIONS} />
            {BUTTON_LIST.map(item => (
              <S.FilterButton
                key={item.label}
                onClick={() => setQuery(item.query)}
                $isSelect={query.mainCategoryId === item.query.mainCategoryId}
              >
                {item.label}
              </S.FilterButton>
            ))}
          </S.FilterListContainer>
          <S.RedLine />
          <ItemContainer />
        </S.StoreItemListSection>
      </globalS.Layout>
    </>
  );
}
