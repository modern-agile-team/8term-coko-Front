import { useSuspenseQuery, useInfiniteQuery } from '@tanstack/react-query';
import sectionsApis from '@features/learn/apis';
import type { SectionPagination } from '@features/learn/types';

const sectionKeys = {
  all: ['sections'] as const,
  lists: () => [...sectionKeys.all, 'list'] as const,
  details: (id: number) => [...sectionKeys.all, 'detail', id] as const,
  paginated: () => [...sectionKeys.all, 'paginated'] as const,
  userPaginated: () => [...sectionKeys.all, 'userPaginated'] as const,
};

// 쿼리 생성 공통 함수: 섹션 데이터 페이지네이션 (무한 스크롤)
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

export const sectionsQuery = {
  get: (id: number) =>
    useSuspenseQuery({
      queryKey: sectionKeys.details(id),
      queryFn: () => sectionsApis.getSection(id),
    }),

  getAll: () =>
    useSuspenseQuery({
      queryKey: sectionKeys.lists(),
      queryFn: sectionsApis.getAllSections,
    }),

  getByPage: createInfiniteSectionQuery(
    sectionKeys.paginated(),
    sectionsApis.getSectionsByPage
  ),
  getUserByPage: createInfiniteSectionQuery(
    sectionKeys.userPaginated(),
    sectionsApis.getUserSectionsByPage
  ),
};
