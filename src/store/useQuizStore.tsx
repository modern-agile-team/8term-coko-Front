import { create } from 'zustand';
interface quizState {
  currentPage: number;
  userResponseAnswer: string[];
  totalResults: boolean[];
  handleNextPage: () => void;
  setUserResponseAnswer: (userResposne: string) => void;
  pushUserResponseAnswer: (userResponse: string) => void;
  spliceUserResponseAnswer: (choiceIndex: number) => void;
  swapUserResponseAnswer: (index1: number, index2: number) => void;
  resetUserResponseAnswer: () => void;
  pushTotalResults: (result: boolean) => void;
  reset: () => void;
}
export const useClientQuizStore = create<quizState>(set => ({
  currentPage: 0,
  userResponseAnswer: [],
  totalResults: [],
  handleNextPage: () => set(state => ({ currentPage: state.currentPage + 1 })),
  spliceUserResponseAnswer: choiceIndex =>
    set(state => {
      const copyArray = [...state.userResponseAnswer];
      copyArray.splice(choiceIndex, 1);
      return { userResponseAnswer: copyArray };
    }),
  setUserResponseAnswer: userResposne =>
    set(() => ({ userResponseAnswer: [userResposne] })),
  pushUserResponseAnswer: userResponse =>
    set(state => ({
      userResponseAnswer: [...state.userResponseAnswer, userResponse],
    })),
  resetUserResponseAnswer: () => set(() => ({ userResponseAnswer: [] })),
  swapUserResponseAnswer: (index1, index2) =>
    set(state => {
      const copyArray = [...state.userResponseAnswer];
      [copyArray[index1], copyArray[index2]] = [
        copyArray[index2],
        copyArray[index1],
      ];
      return { userResponseAnswer: copyArray };
    }),
  reset: () => {
    set(() => ({ currentPage: 0, userResponse: [''] }));
  },
  pushTotalResults: result =>
    set(state => ({ totalResults: [...state.totalResults, result] })),
}));
