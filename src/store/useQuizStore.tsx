import { create } from 'zustand';
interface quizState {
  currentPage: number;
  userChoiceCombination: string[] | null;
  handleNextPage: () => void;
  choiceListPush: (choice: string) => void;
  reset: () => void;
  choiceListShift: () => string | null;
  removeMyChoice: (choice: string) => void;
}
export const useClientQuizStore = create<quizState>(set => ({
  currentPage: 0,
  userChoiceCombination: null,
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
  choiceListShift: () => {
    let poppedValue: string | null = null;
    set(state => {
      const choiceList = state.userChoiceCombination;
      if (choiceList === null) {
        return state;
      }
      poppedValue = choiceList.shift() ?? null;
      return { userChoiceCombination: choiceList };
    });
    return poppedValue;
  },

  reset: () => {
    set(() => ({ currentPage: 0, userResponse: [''] }));
  },
  submitUserResponse: () => {},
}));
