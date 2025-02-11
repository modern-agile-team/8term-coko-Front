import * as S from './styles';
import StoreItem from './StoreItem';
import type { CosmeticItem } from '@features/store/types';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';

const testItem: CosmeticItem[] = [
  {
    id: 1,
    name: '해적 베레모',
    image: '해적-베레모.svg',
    price: 500,
    category: 'accessories',
    mainCategoryId: 1,
    subCategoryId: null,
  },
  {
    id: 2,
    name: '해적 의상',
    image: '해적-의상.svg',
    price: 1000,
    category: 'clothes',
    mainCategoryId: 2,
    subCategoryId: null,
  },
  {
    id: 3,
    name: '해초의 습격',
    image: '해초의-습격.svg',
    price: 500,
    category: 'profile',
    mainCategoryId: 3,
    subCategoryId: null,
  },
  {
    id: 4,
    name: '해적 베레모',
    image: '해적-베레모.svg',
    price: 500,
    category: 'color',
    mainCategoryId: 4,
    subCategoryId: null,
  },
];
interface CartListProps {
  isMobileHidden: boolean;
}
export default function CartList({ isMobileHidden }: CartListProps) {
  const { selectedCosmeticItems } = useCosmeticItemStore();

  return (
    <>
      <S.CartListWrapper $isMobileHidden={isMobileHidden}>
        <S.CartLabel>장바구니</S.CartLabel>
        <S.CartListItemWrapper>
          {selectedCosmeticItems.map(item => (
            <StoreItem key={item.id} cosmeticItem={item} isCartList />
          ))}
        </S.CartListItemWrapper>
        <S.PlaceLabel>총 1500포인트</S.PlaceLabel>
      </S.CartListWrapper>
    </>
  );
}
