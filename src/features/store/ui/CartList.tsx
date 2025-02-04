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

interface CartListProps {
  isMobileHidden?: boolean;
}
export default function CartList({ isMobileHidden = true }: CartListProps) {
  return (
    <>
      <S.CartListWrapper $isMobileHidden={isMobileHidden}>
        <S.CartLabel>장바구니</S.CartLabel>
        <S.CartListItemWrapper>
          {testItem.map(item => (
            <StoreItem key={item.id} {...item} />
          ))}
        </S.CartListItemWrapper>
        <S.PlaceLabel>총 1500포인트</S.PlaceLabel>
      </S.CartListWrapper>
    </>
  );
}
