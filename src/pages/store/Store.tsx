import * as globalS from '@style/styles';
import * as S from './styles';
import Header from '@common/layout/Header';
import MenuBar from '@common/layout/MenuBar';
import ItemContainer from '@features/store/ui/ItemContainer';
import { useMediaQuery, useUnmount } from '@modern-kit/react';
import StoreMyCharacterSection from '@/features/user/ui/StoreMyCharacterSection';
import { useCosmeticItemStore } from '@/features/store/store';
import QueryErrorBoundary from '@/features/error/ui/QueryErrorBoundary';
import { ErrorBoundary } from 'react-error-boundary';
import ItemFallback from '@/features/error/ui/ItemFallback';
import { Suspense } from 'react';
import ItemSkeleton from '@/features/store/ui/ItemSkeleton';
import SortBar from '@/features/store/ui/SortBar';
import Skeleton from '@/common/layout/Skeleton';

export default function Store() {
  const { resetEquippedItem } = useCosmeticItemStore();
  useUnmount(resetEquippedItem);

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
        <Suspense fallback={<div>safjsdkajfsadkl;fjsdlk;</div>}>
          <StoreMyCharacterSection />
        </Suspense>
        <S.StoreItemListSection>
          <SortBar />
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
