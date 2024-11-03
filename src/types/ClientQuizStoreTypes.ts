interface ClientQuizStoreTypes {
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
}
export default ClientQuizStoreTypes;
