import { SkeletonBase } from '@/common/layout/styles';
import { useCosmeticItemQuery } from '@/features/store/queries';
import { CosmeticItem } from '@/features/store/types';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
import { SubtractInjectedProps } from '@/types';
import { FC } from 'react';

interface InjectedProps {
  cosmeticItem: CosmeticItem[];
}

const withCosmeticItem = <P extends object>(
  WrappedComponent: FC<P & InjectedProps>
) => {
  const ComponentWithCosmeticItem: FC<
    SubtractInjectedProps<P, InjectedProps>
  > = ({ ...rest }) => {
    const { isMyItemsVisible } = useCosmeticItemStore();
    const { data: cosmeticItem, isLoading } =
      useCosmeticItemQuery.getCosmeticItemByPage(!isMyItemsVisible);
    const { data: userCosmeticItem, isLoading: userIsLoading } =
      useUserCosmeticItemsQuery.getMyItems({ isMyItemsVisible });

    if (isLoading || userIsLoading) {
      return <SkeletonBase width="100px" height="100px" />;
    }
    const finalData =
      isMyItemsVisible && userCosmeticItem ? userCosmeticItem : cosmeticItem;

    if (!finalData) {
      return <SkeletonBase />;
    }

    return <WrappedComponent {...(rest as P)} cosmeticItem={finalData} />;
  };
  return ComponentWithCosmeticItem;
};

export default withCosmeticItem;
