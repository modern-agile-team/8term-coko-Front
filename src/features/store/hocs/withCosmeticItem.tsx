import { SkeletonBase } from '@/common/layout/styles';
import { useCosmeticItemQuery } from '@/features/store/queries';
import { CosmeticItem } from '@/features/store/types';
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

    //모든 아이템 조회(페이지네이션)
    if (!isMyItemsVisible) {
      const { data, isLoading } = useCosmeticItemQuery.getCosmeticItemByPage(
        !isMyItemsVisible
      );
      if (isLoading) return <SkeletonBase width="100px" height="100px" />;
      if (!data) {
        return <SkeletonBase />;
      }
      return <WrappedComponent {...(rest as P)} cosmeticItem={data} />;
    }
    //내가 구매한 아이템 조회(페이지네이션)
    const cosmeticItem: CosmeticItem[] = isMyItemsVisible ? [] : [];

    return <WrappedComponent {...(rest as P)} cosmeticItem={cosmeticItem} />;
  };

  return ComponentWithCosmeticItem;
};

export default withCosmeticItem;
