import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface quizState {
  currentPage: number;
  handleNextPage: () => void;
  reset: () => void;
}
//퀴즈 데이터 자체는 서버상태로 관리
//전역 퀴즈 스토어
//현재 어떤 퀴즈를 보고있는지
//유저가 입력한 답이 뭔지
export const useClientQuizStore = create(
  persist<quizState>(
    set => ({
      currentPage: 0,
      // 유저가 응답한 답을 관리하는 상태
      // 다음 페이지로 넘기기
      handleNextPage: () =>
        set(state => ({ currentPage: state.currentPage + 1 })),
      reset: () => {
        localStorage.removeItem('quiz-storage');
        set(() => ({ currentPage: 0, userResponse: [''] }));
      },
    }),
    {
      name: 'quiz-storage',
    }
  )
);
