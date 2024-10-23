import { create } from 'zustand';
import type ClientquizStoreTypes from '../types/ClientquizStoreTypes';
export const useClientQuizStore = create<ClientquizStoreTypes>(set => ({
  /** 페이지 전역상태*/
  currentPage: 0,
  handleNextPage: () => set(state => ({ currentPage: state.currentPage + 1 })),

  /**유저 응답 전역상태 */
  userResponseAnswer: [],
  //유저 응답 추가
  setUserResponseAnswer: userResposne =>
    set(() => ({ userResponseAnswer: [userResposne] })),
  //유저 응답 누적
  pushUserResponseAnswer: userResponse =>
    set(state => {
      const copyArray = [...state.userResponseAnswer];
      const emptyIndex = copyArray.indexOf('');
      if (emptyIndex === -1) {
        return {
          userResponseAnswer: [...copyArray, userResponse],
        };
      }
      copyArray[emptyIndex] = userResponse;
      return { userResponseAnswer: [...copyArray] };
    }),
  //유저 응답 리셋
  resetUserResponseAnswer: () => set(() => ({ userResponseAnswer: [] })),
  //유저 응답 순서 교환
  swapUserResponseAnswer: (index1, index2) =>
    set(state => {
      console.log(index1, index2);
      const copyArray = [...state.userResponseAnswer];
      [copyArray[index1], copyArray[index2]] = [
        copyArray[index2],
        copyArray[index1],
      ];
      return { userResponseAnswer: copyArray };
    }),
  //특정 유저 응답 ''로 초기화
  spliceUserResponseAnswer: choiceIndex =>
    set(state => {
      const copyArray = [...state.userResponseAnswer];
      copyArray[choiceIndex] = '';
      return { userResponseAnswer: copyArray };
    }),
  /**정답 전역상태 */
  totalResults: [],
  pushTotalResults: result =>
    set(state => ({ totalResults: [...state.totalResults, result] })),
}));
