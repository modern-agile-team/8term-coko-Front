import { create } from 'zustand';
import type ClientquizStoreTypes from '../types/ClientquizStoreTypes';
export const useClientQuizStore = create<ClientquizStoreTypes>(set => ({
  /** 페이지 전역상태*/
  currentPage: 0,
  handleNextPage: () => set(state => ({ currentPage: state.currentPage + 1 })),
  spliceUserResponseAnswer: choiceIndex =>
    set(state => {
      const copyArray = [...state.userResponseAnswer];
      copyArray.splice(choiceIndex, 1);
      return { userResponseAnswer: copyArray };
    }),
  /**유저 응답 전역상태 */
  userResponseAnswer: [],
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
  /**정답 전역상태 */
  totalResults: [],
  pushTotalResults: result =>
    set(state => ({ totalResults: [...state.totalResults, result] })),
}));
