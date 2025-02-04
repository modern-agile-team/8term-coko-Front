import { useSuspenseQuery, useInfiniteQuery } from '@tanstack/react-query';
import sectionsApis from '@features/learn/apis';
import type { SectionPagination } from '@features/learn/types';

const sectionKeys = {
  all: ['sections'] as const,
  list: () => [...sectionKeys.all, 'list'] as const,
  detail: (id: number) => [...sectionKeys.all, 'detail', id] as const,
  paginated: () => [...sectionKeys.all, 'paginated'] as const,
  userPaginated: () =>
    ['users', 'me', ...sectionKeys.all, 'paginated'] as const,
};

// 무한 스크롤용(페이지네이션) 섹션 쿼리 생성 함수
const createInfiniteSectionQuery = (
  queryKey:
    | ReturnType<typeof sectionKeys.paginated>
    | ReturnType<typeof sectionKeys.userPaginated>,
  apiFn: (cursor?: number) => Promise<SectionPagination>
) => {
  return () =>
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam }: { pageParam?: number }) =>
        apiFn(pageParam ?? undefined),
      getNextPageParam: (lastPage: SectionPagination) =>
        lastPage.hasNextPage ? lastPage.nextCursor : null,
      initialPageParam: undefined,
    });
};

export const useSectionDetailQuery = {
  getSection: (id: number) =>
    useSuspenseQuery({
      queryKey: sectionKeys.detail(id),
      queryFn: () => sectionsApis.getSection(id),
    }),
};

export const useSectionListQuery = {
  getAllSections: () =>
    useSuspenseQuery({
      queryKey: sectionKeys.list(),
      queryFn: sectionsApis.getAllSections,
    }),
};

export const useSectionPaginationQuery = {
  getSectionsByPage: createInfiniteSectionQuery(
    sectionKeys.paginated(),
    sectionsApis.getSectionsByPage
  ),
  getUserSectionsByPage: createInfiniteSectionQuery(
    sectionKeys.userPaginated(),
    sectionsApis.getUserSectionsByPage
  ),
};
