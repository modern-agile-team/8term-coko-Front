import { SkeletonBase } from '@/common/layout/styles';
import QueryErrorBoundary from '@/features/error/ui/QueryErrorBoundary';
import { useCosmeticItemQuery } from '@/features/store/queries';
import { CosmeticItem } from '@/features/store/types';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';
import { SubtractInjectedProps } from '@/types';
import { FC, useEffect } from 'react';
import { useMediaQuery } from '@modern-kit/react';
import { ItemContainer } from '@/features/store/ui/styles';

interface InjectedProps {
  totalPage: number;
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
    const limitArray = Array.from({ length: limit }, (_, i) => i + 1);

    const { data: cosmeticItem, isLoading } =
      useCosmeticItemQuery.getCosmeticItemByPage({
        isFetching: !isMyItemsVisible,
        params: { page: currentPage, ...query, limit },
      });

    const { data: userCosmeticItem, isLoading: userIsLoading } =
      useUserCosmeticItemsQuery.getMyCosmeticItemByPage({
        isFetching: isMyItemsVisible,
        params: { page: currentPage, ...query, limit },
      });

    if (isLoading || userIsLoading) {
      return (
        <ItemContainer>
          {limitArray.map(value => (
            <SkeletonBase width="100%" height="100%" key={value} />
          ))}
        </ItemContainer>
      );
    }
    const finalData =
      isMyItemsVisible && userCosmeticItem ? userCosmeticItem : cosmeticItem;
    console.log(finalData);
    if (!finalData) {
      return (
        <ItemContainer>
          {limitArray.map(value => (
            <SkeletonBase width="100%" height="100%" key={value} />
          ))}
        </ItemContainer>
      );
    }

    return (
      <WrappedComponent
        {...(rest as P)}
        contents={finalData.contents}
        totalPage={finalData.totalPage}
      />
    );
  };
  return ComponentWithCosmeticItem;
};

export default withCosmeticItem;
