import { useState } from 'react';
import * as globalS from '@style/styles';
import * as S from './styles';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import ItemContainer from '@features/store/ui/ItemContainer';

import { useToggle } from '@modern-kit/react';
import {
  ACCESSPRIES_OPTIONS,
  BUTTION_LIST,
  CLOTHES_OPTIONS,
} from '@/features/store/constants';
import StoreSortBar from '@/features/store/ui/StoreSortBar';

import StoreMyCharacterSection from '@/features/user/ui/StoreMyCharacterSection';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
import useUserStore from './../../store/useUserStore';
import { isLoggedIn } from '@/features/user/service/authUtils';

export default function Store() {
  const { query, setQuery } = useCosmeticItemStore();

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
        {}
        <StoreMyCharacterSection />
        <S.StoreItemListSection>
          <S.FilterListContainer>
            <StoreSortBar items={CLOTHES_OPTIONS} />
            <StoreSortBar items={ACCESSPRIES_OPTIONS} />
            {BUTTION_LIST.map(item => (
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
