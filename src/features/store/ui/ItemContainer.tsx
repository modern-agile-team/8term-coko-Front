import { getImageUrl } from '@/utils/getImageUrl';
import * as S from '../styles';
import { useState } from 'react';
const testItem = [
  {
    id: 1,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
  {
    id: 2,
    label: '해적 의상',
    img: '해적-의상.svg',
    place: '1000',
  },
  {
    id: 3,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
  {
    id: 4,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
];
export default function ItemContainer() {
  //스타일링을 위함 추후 수정 예정
  const [currentPage, setCurrentPage] = useState<number>();
  return (
    <>
      <S.StoreItemWrapper>
        {testItem.map(item => (
          <S.StoreItem key={item.id}>
            <S.ItemLabel>{item.label}</S.ItemLabel>
            <S.ItemImage src={getImageUrl(item.img)}></S.ItemImage>
            <S.ItemLabel>{item.place} Point</S.ItemLabel>
          </S.StoreItem>
        ))}
      </S.StoreItemWrapper>
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
