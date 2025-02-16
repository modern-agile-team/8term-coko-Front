import { SkeletonBase } from '@/common/layout/styles';
import QueryErrorBoundary from '@/features/error/ui/QueryErrorBoundary';
import { useCosmeticItemQuery } from '@/features/store/queries';
import { CosmeticItem } from '@/features/store/types';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';
import { SubtractInjectedProps } from '@/types';
import { FC } from 'react';
import { useMediaQuery } from '@modern-kit/react';

interface InjectedProps {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  contents: CosmeticItem[];
}

const withCosmeticItem = <P extends object>(
  WrappedComponent: FC<P & InjectedProps>
) => {
  const ComponentWithCosmeticItem: FC<
    SubtractInjectedProps<P, InjectedProps>
  > = ({ ...rest }) => {
    const { isMyItemsVisible, currentPage, query } = useCosmeticItemStore();

    const isMobile = useMediaQuery('(min-width: 768px)');
    const limit = isMobile ? 8 : 4;

    const { data: cosmeticItem, isLoading } =
      useCosmeticItemQuery.getCosmeticItemByPage({
        isFetching: !isMyItemsVisible,
        params: { page: currentPage, ...query, limit },
      });

    const { data: userCosmeticItem, isLoading: userIsLoading } =
      useUserCosmeticItemsQuery.getMyItems({
        isFetching: isMyItemsVisible,
        params: { page: currentPage, ...query, limit },
      });

    if (isLoading || userIsLoading) {
      return <SkeletonBase width="90%" height="80%" />;
    }
    const finalData =
      isMyItemsVisible && userCosmeticItem ? userCosmeticItem : cosmeticItem;

    if (!finalData) {
      return <SkeletonBase width="90%" height="80%" />;
    }
    return (
      <WrappedComponent
        {...(rest as P)}
        contents={finalData.contents}
        currentPage={finalData.currentPage}
        totalPage={finalData.totalPage}
        totalCount={finalData.totalCount}
      />
    );
  };
  return ComponentWithCosmeticItem;
};

export default withCosmeticItem;
