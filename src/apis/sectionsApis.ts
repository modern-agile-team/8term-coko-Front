import { Section } from '@type/Section';
import api from './axios/instance';

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
};

export default sectionsApis;
