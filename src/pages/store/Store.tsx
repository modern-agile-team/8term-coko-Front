import * as globalS from '@style/styles';
import * as S from './styles';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import ItemContainer from '@features/store/ui/ItemContainer';
import { useMediaQuery, useUnmount } from '@modern-kit/react';
import {
  ACCESSORIES_OPTIONS,
  BUTTON_LIST,
  CLOTHES_OPTIONS,
} from '@/features/store/constants';
import StoreSortBar from '@/features/store/ui/StoreSortBar';
import StoreMyCharacterSection from '@/features/user/ui/StoreMyCharacterSection';
import { useCosmeticItemStore } from '@/features/store/store';
import QueryErrorBoundary from '@/features/error/ui/QueryErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import ItemFallback from '@/features/error/ui/ItemFallback';
import { CosmeticItemOption } from '@/features/store/types';
import { Suspense } from 'react';
import ItemSkeleton from '@/features/store/ui/ItemSkeleton';

export default function Store() {
  const { query, setQuery, resetEquippedItem, setCurrentPage } =
    useCosmeticItemStore();
  useUnmount(resetEquippedItem);

  const handleFilter = (query: CosmeticItemOption['query']) => {
    setCurrentPage(1);
    setQuery(query);
  };
  const isMobile = useMediaQuery('(min-width: 768px)');
  const limit = isMobile ? 8 : 4;

  return (
    <>
      <title>코코 상점</title>
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
            <S.FilterButton
              $isSelect={query.mainCategoryId === 0}
              onClick={() =>
                handleFilter({ mainCategoryId: 0, subCategoryId: 0 })
              }
            >
              전체
            </S.FilterButton>
            <StoreSortBar items={CLOTHES_OPTIONS} />
            <StoreSortBar items={ACCESSORIES_OPTIONS} />
            {BUTTON_LIST.map(item => (
              <S.FilterButton
                key={item.label}
                onClick={() => handleFilter(item.query)}
                $isSelect={query.mainCategoryId === item.query.mainCategoryId}
              >
                {item.label}
              </S.FilterButton>
            ))}
          </S.FilterListContainer>
          <S.RedLine />
          <QueryErrorBoundary>
            <ErrorBoundary FallbackComponent={ItemFallback}>
              <Suspense fallback={<ItemSkeleton limit={limit} />}>
                <ItemContainer limit={limit} />
              </Suspense>
            </ErrorBoundary>
          </QueryErrorBoundary>
        </S.StoreItemListSection>
      </globalS.Layout>
    </>
  );
}
