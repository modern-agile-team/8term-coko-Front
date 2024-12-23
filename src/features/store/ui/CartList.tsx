import * as S from './styles';
import StoreItem from './StoreItem';
import type { CosmeticItem } from '@features/store/types';

const testItem: CosmeticItem[] = [
  {
    id: 1,
    name: '해적 베레모',
    image: '해적-베레모.svg',
    cost: 500,
    category: 'accessories',
  },
  {
    id: 2,
    name: '해적 의상',
    image: '해적-의상.svg',
    cost: 1000,
    category: 'clothes',
  },
  {
    id: 3,
    name: '해초의 습격',
    image: '해초의-습격.svg',
    cost: 500,
    category: 'profile',
  },
  {
    id: 4,
    name: '해적 베레모',
    image: '해적-베레모.svg',
    cost: 500,
    category: 'color',
  },
];

export default function CartList() {
  return (
    <>
      <S.StoreCartListWrapper>
        {testItem.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </S.StoreCartListWrapper>
      <S.PlaceLabel>총 1500포인트</S.PlaceLabel>
    </>
  );
}
