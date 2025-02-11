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
import { contains } from '@modern-kit/utils';
import { CosmeticItemOption } from '@/features/store/types';
import StoreMyCharacterSection from '@/features/user/ui/StoreMyCharacterSection';

export default function Store() {
  const [itemQuery, setItemQuery] = useState<string>('all');
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
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <StoreMyCharacterSection />
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
