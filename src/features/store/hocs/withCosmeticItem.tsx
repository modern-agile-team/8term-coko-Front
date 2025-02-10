import { CosmeticItem } from '@/features/store/types';
import { SubtractInjectedProps } from '@/types';
import { FC } from 'react';

interface WithCosmeticItemProps {
  isMyItem: boolean;
}

interface InjectedProps {
  cosmeticItem: CosmeticItem[];
}

const withCosmeticItem = <P extends object>(
  WrappedComponent: FC<P & InjectedProps>
) => {
  const ComponentWithCosmeticItem: FC<
    SubtractInjectedProps<P, InjectedProps> & WithCosmeticItemProps
  > = ({ isMyItem, ...rest }) => {
    const cosmeticItem: CosmeticItem[] = isMyItem
      ? [
          {
            id: 4,
            name: '해적 베레모',
            image: '해적-베레모.svg',
            cost: 500,
            category: 'accessories',
          },
        ]
      : [];

    return <WrappedComponent {...(rest as P)} cosmeticItem={cosmeticItem} />;
  };

  return ComponentWithCosmeticItem;
};

export default withCosmeticItem;
