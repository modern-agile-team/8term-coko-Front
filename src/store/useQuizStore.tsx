import { create } from 'zustand';
interface quizState {
  currentPage: number;
  userResponse: string[];
  handleNextPage: () => void;
}
//퀴즈 데이터 자체는 서버상태로 관리
//전역 퀴즈 스토어
//현재 어떤 퀴즈를 보고있는지
//유저가 입력한 답이 뭔지
export const useClientQuizStore = create<quizState>(set => ({
  currentPage: 0,
  userResponse: [''],
  //다음 페이지로 넘기기
  handleNextPage: () => set(state => ({ currentPage: state.currentPage + 1 })),
}));
