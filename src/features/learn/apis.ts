import api from '@/axios/instance';
import type { Section, SectionPagination } from '@/features/learn/types';

const sectionsApis = {
  // 특정 섹션 ID에 대한 데이터 가져오기
  getSection: async (id: number): Promise<Section> => {
    const response = await api.get(`/sections/${id}`);
    return response.data;
  },

  // 모든 섹션 데이터 가져오기
  getAllSections: async (): Promise<Section[]> => {
    const response = await api.get('/sections');
    return response.data;
  },

  //  페이지네이션 섹션 데이터 가져오기 (무한 스크롤)
  getSectionsByPage: async (
    cursor?: number,
    pageSize = 2
  ): Promise<SectionPagination> => {
    const response = await api.get('/sections/parts', {
      params: {
        cursor,
        pageSize,
      },
    });
    const { data, hasNextPage, nextCursor } = response.data;
    return {
      sections: data || [],
      hasNextPage,
      nextCursor,
    };
  },
};
export default sectionsApis;
