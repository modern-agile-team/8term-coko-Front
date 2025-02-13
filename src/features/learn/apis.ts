import api from '@/axios/instance';
import type {
  Section,
  SectionWithoutParts,
  SectionPagination,
} from '@features/learn/types';

// 공통 함수: 페이지네이션 섹션 데이터 가져오기 (무한 스크롤)
const createGetSectionsByPage = (endpoint: string) => {
  return async (cursor?: number, pageSize = 2): Promise<SectionPagination> => {
    const response = await api.get(endpoint, {
      params: { cursor, pageSize },
    });

    const { data, hasNextPage, nextCursor } = response.data;
    return {
      sections: data || [],
      hasNextPage,
      nextCursor,
    };
  };
};

const sectionsApis = {
  // 특정 섹션 ID에 대한 데이터 가져오기
  getSection: async (id: number): Promise<Section> => {
    const response = await api.get(`/sections/${id}`);
    return response.data;
  },

  // 모든 섹션 데이터 가져오기
  getAllSectionsWithoutParts: async (): Promise<SectionWithoutParts[]> => {
    const response = await api.get('/sections');
    return response.data;
  },

  // 비로그인용 (기존 /sections/parts)
  getSectionsByPage: createGetSectionsByPage('/sections/parts'),

  // 로그인용 (users/me/sections/parts)
  getUserSectionsByPage: createGetSectionsByPage('/users/me/sections/parts'),
};
export default sectionsApis;
