import { useSuspenseQuery, useInfiniteQuery } from '@tanstack/react-query';
import sectionsApis from '@features/learn/apis';

const sectionKeys = {
  all: ['sections'],
  lists: () => [...sectionKeys.all, 'list'] as const,
  details: (id: number) => [...sectionKeys.all, 'detail', id] as const,
  paginated: () => [...sectionKeys.all, 'paginated'] as const,
};

export const sectionsQuery = {
  // 특정 섹션 ID에 대한 데이터 가져오기
  get: (id: number) =>
    useSuspenseQuery({
      queryKey: sectionKeys.details(id),
      queryFn: () => sectionsApis.getSection(id),
    }),

  // 모든 섹션 데이터 가져오기
  getAll: () =>
    useSuspenseQuery({
      queryKey: sectionKeys.lists(),
      queryFn: sectionsApis.getAllSections,
    }),

  // 페이지네이션 섹션 데이터 가져오기 (무한 스크롤)
  getByPage: () =>
    useInfiniteQuery({
      queryKey: sectionKeys.paginated(),
      queryFn: ({ pageParam }: { pageParam?: number }) =>
        sectionsApis.getSectionsByPage(pageParam ?? undefined),
      getNextPageParam: lastPage =>
        lastPage.hasNextPage ? lastPage.nextCursor : null,
      initialPageParam: undefined,
    }),
};
