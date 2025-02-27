import { PaginationButton, PaginationDiv } from '@/features/store/ui/styles';
import { useCosmeticItemStore } from '@/features/store/store';
import { generatePaginationPages } from '@/utils/generatePaginationPages';
import { useMediaQuery } from '@modern-kit/react';
import { isNumber } from '@modern-kit/utils';

interface PageNavBarProps {
  totalPage: number;
}
export default function PageNavBar({ totalPage }: PageNavBarProps) {
  const { currentPage, setCurrentPage } = useCosmeticItemStore();

  return (
    <PaginationDiv>
      {generatePaginationPages({
        currentPage,
        totalPage,
        maxVisible: 4,
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
