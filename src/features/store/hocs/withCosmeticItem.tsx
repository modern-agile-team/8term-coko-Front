import { useCosmeticItemQuery } from '@/features/store/queries';
import { CosmeticItem } from '@/features/store/types';
import { useCosmeticItemStore } from '@/features/store/store';
import { SubtractInjectedProps } from '@/types';
import { FC } from 'react';

interface InjectedProps {
  totalPage: number;
  contents: CosmeticItem[];
}

const withCosmeticItem = <P extends object>(
  WrappedComponent: FC<P & InjectedProps>
) => {
  const ComponentWithCosmeticItem: FC<
    SubtractInjectedProps<P, InjectedProps> & { limit: number }
  > = ({ limit, ...rest }) => {
    const { isMyItemsVisible, currentPage, query } = useCosmeticItemStore();

    const { data: cosmeticItem } = useCosmeticItemQuery.getCosmeticItem({
      page: currentPage,
      ...query,
      limit,
      isMyItemsVisible,
    });

    // if (isLoading || userIsLoading) {
    //   return (
    //     <ItemContainer>
    //       {limitArray.map(value => (
    //         <SkeletonBase width="100%" height="100%" key={value} />
    //       ))}
    //     </ItemContainer>
    //   );
    // }

    return (
      <WrappedComponent
        {...(rest as P)}
        contents={cosmeticItem.contents}
        totalPage={cosmeticItem.totalPage}
      />
    );
  };
  return ComponentWithCosmeticItem;
};

export default withCosmeticItem;
