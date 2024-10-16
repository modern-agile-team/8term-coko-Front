import { create } from 'zustand';
interface quizState {
  currentPage: number;
  userChoiceCombination: string[] | null;
  userResponseAnswer: string[] | null;
  handleNextPage: () => void;
  choiceListPush: (choice: string) => void;
  setUserResponseAnswer: (userResposne: string[] | null) => void;
  removeMyChoice: (choice: string) => void;
  resetUserResponseAnswer: () => void;
  reset: () => void;
}
export const useClientQuizStore = create<quizState>(set => ({
  currentPage: 0,
  userChoiceCombination: null,
  userResponseAnswer: null,
  handleNextPage: () => set(state => ({ currentPage: state.currentPage + 1 })),
  choiceListPush: choice =>
    set(state => {
      if (state.userChoiceCombination === null) {
        return { userChoiceCombination: [choice] };
      }
      return {
        userChoiceCombination: [...state.userChoiceCombination, choice],
      };
    }),
  removeMyChoice: choice => {
    set(state => {
      if (state.userChoiceCombination === null) {
        return state;
      }
      return {
        userChoiceCombination: state.userChoiceCombination.filter(
          item => item !== choice
        ),
      };
    });
  },
  setUserResponseAnswer: userResposne => {
    set(() => ({ userResponseAnswer: userResposne }));
  },
  resetUserResponseAnswer: () => set(() => ({ userResponseAnswer: null })),

  reset: () => {
    set(() => ({ currentPage: 0, userResponse: [''] }));
  },
  submitUserResponse: () => {},
}));
