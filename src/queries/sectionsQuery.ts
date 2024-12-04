import { useQuery } from '@tanstack/react-query';
import sectionsApis from '@apis/sectionsApis';

const sectionKeys = {
  all: ['sections'],
  lists: () => [...sectionKeys.all, 'list'] as const,
  details: (id: number) => [...sectionKeys.all, 'detail', id] as const,
};

const sectionsQuery = {
  // 특정 섹션 ID에 대한 데이터 가져오기
  get: (id: number) =>
    useQuery({
      queryKey: sectionKeys.details(id),
      queryFn: () => sectionsApis.getSection(id),
    }),

  // 모든 섹션 데이터 가져오기
  getAll: () =>
    useQuery({
      queryKey: sectionKeys.lists(),
      queryFn: sectionsApis.getAllSections,
    }),
};

export default sectionsQuery;
