import { PaginationButton, PaginationDiv } from '@/features/store/ui/styles';
import { useCosmeticItemStore } from '@/features/store/useCosmeticItemStore';
import { generatePaginationPages } from '@/utils/generatePaginationPages';
import { useMediaQuery } from '@modern-kit/react';
import { isNumber } from '@modern-kit/utils';

export default function PageNavBar() {
  const { currentPage, setCurrentPage, query } = useCosmeticItemStore();
  const isMobile = useMediaQuery('(min-width: 768px)');
  const limit = isMobile ? 8 : 4;
  console.log({ ...query, currentPage, limit });

  return (
    <PaginationDiv>
      {generatePaginationPages({
        currentPage,
        totalPage: 300,
      }).map(page => {
        if (isNumber(page)) {
          return (
            <PaginationButton
              key={page}
              onClick={() => setCurrentPage(page)}
              $isSelect={page === currentPage}
            >
              {page}
            </PaginationButton>
          );
        }
        return page;
      })}
    </PaginationDiv>
  );
}
