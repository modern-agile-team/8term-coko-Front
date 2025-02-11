import * as S from './styles';
import { useState } from 'react';
import StoreItem from './StoreItem';
import { CosmeticItem } from '@/features/store/types';
import withCosmeticItem from '@/features/store/hocs/withCosmeticItem';

interface ItemContainerProps {
  cosmeticItem: CosmeticItem[];
}

function ItemContainer({ cosmeticItem }: ItemContainerProps) {
  const [currentPage, setCurrentPage] = useState<number>();

  return (
    <>
      <S.ItemContainer>
        {cosmeticItem.map(item => (
          <StoreItem key={item.id} cosmeticItem={item} isCartList={false} />
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

export default withCosmeticItem(ItemContainer);
