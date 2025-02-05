export interface PaginationConfig {
  currentPage: number;
  totalPage: number;
  maxVisible?: number;
}

/**
 * 페이지네이션을 위한 페이지 목록을 생성하는 함수
 * @param {PaginationConfig} config 페이지네이션 설정 객체
 * @returns {(number | string)[]} 페이지 목록 (예: [1, '···', 5, 6, 7, '···', 10])
 */
export function generatePaginationPages({
  currentPage,
  totalPage,
  maxVisible = 5,
}: PaginationConfig): (number | string)[] {
  if (totalPage <= maxVisible) {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];
  const visibleMiddleCount = maxVisible - 2; // 첫/마지막 페이지 제외한 개수

  let startPage = Math.max(2, currentPage - Math.floor(visibleMiddleCount / 2));
  let endPage = Math.min(totalPage - 1, startPage + visibleMiddleCount - 1);

  // 페이지 범위 조정
  if (endPage >= totalPage - 1) {
    startPage = totalPage - visibleMiddleCount;
    endPage = totalPage - 1;
  }

  // 첫 페이지
  pages.push(1);

  // '···' 여부 (왼쪽)
  if (startPage > 2) {
    pages.push('···');
  }

  // 현재 페이지를 기준으로 한 페이지 목록을 추가 (중간 페이지들)
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // '···' 여부 (오른쪽)
  if (endPage < totalPage - 1) {
    pages.push('···');
  }

  // 마지막 페이지
  pages.push(totalPage);

  return pages;
}
