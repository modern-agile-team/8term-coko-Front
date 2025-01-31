import * as S from './styles';
import { useState } from 'react';
import StoreItem from './StoreItem';
import CosmeticItemsQuery from '@/queries/CosmeticItemsQuery';
import { CosmeticItem } from '@/features/store/types';
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

interface ItemContainerProps {
  query: CosmeticItem['category'];
}
export default function ItemContainer({ query }: ItemContainerProps) {
  //스타일링을 위함 추후 수정 예정
  const [currentPage, setCurrentPage] = useState<number>();
  const { data } = CosmeticItemsQuery.get();
  return (
    <>
      <S.ItemContainer $category={query}>
        {testItem.map(item => (
          <StoreItem key={item.id} {...item} />
        ))}
      </S.ItemContainer>
      {/* 추후 하드코딩 수정 */}
      <S.PaginationDiv>
        {[1, 2, 3, 4, 5].map(page => (
          <S.PaginationButton
            key={page}
            onClick={() => setCurrentPage(page)}
            $isSelect={page === currentPage}
          >
            {page}
          </S.PaginationButton>
        ))}
      </S.PaginationDiv>
    </>
  );
}
