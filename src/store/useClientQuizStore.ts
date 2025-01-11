import { create } from 'zustand';

interface State {
  currentPage: number;
  userResponseAnswer: string[];
  isCorrectList: boolean[];
}
interface Actions {
  nextPage: () => void;
  setUserResponseAnswer: (userResponse: string) => void;
  setUserResponseAtIndex: (userResponse: string, index: number) => void;
  pushUserResponseAnswer: (userResponse: string) => void;
  spliceUserResponseAnswer: (choiceIndex: number) => void;
  swapUserResponseAnswer: (index1: number, index2: number) => void;
  resetUserResponseAnswer: () => void;
  isQuizAnswered: () => boolean;
  pushIsCorrectList: (result: boolean) => void;
  reset: () => void;
}

export const useClientQuizStore = create<State & Actions>((set, get) => ({
  /** 페이지 전역상태*/
  currentPage: 0,
  nextPage: () => set(state => ({ currentPage: state.currentPage + 1 })),
  /**유저  응답 전역상태 */
  userResponseAnswer: [''],
  //유저의 응답을 추가(단답형, OX, 객관식 )
  setUserResponseAnswer: userResponse =>
    set(() => ({ userResponseAnswer: [userResponse] })),
  //유저의 응답을 특정 인덱스에 업데이트
  setUserResponseAtIndex: (userResponse, index) =>
    set(state => {
      state.userResponseAnswer[index] = userResponse;
      return { userResponseAnswer: state.userResponseAnswer };
    }),
  //유저 응답 누적 (조합형, 답이 여러개인 것)
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
  resetUserResponseAnswer: () => set(() => ({ userResponseAnswer: [''] })),
  isQuizAnswered: () => {
    const { userResponseAnswer } = get();
    return userResponseAnswer[0] === '';
  },
  //유저 응답 순서 교환
  swapUserResponseAnswer: (index1, index2) =>
    set(state => {
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
  isCorrectList: [],
  pushIsCorrectList: result =>
    set(state => ({ isCorrectList: [...state.isCorrectList, result] })),
  reset: () =>
    set(() => ({
      currentPage: 0,
      userResponseAnswer: [''],
      isCorrectList: [],
    })),
}));
