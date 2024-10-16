const handleChoiceList = (
  currentChoice: string,
  choiceList: string[]
): string[] => {
  //없다면 배열에 현재값 추가 이미 값이 있으면 제거
  if (!choiceList.includes(currentChoice)) {
    //값 추가 로직
    return (choiceList = [...choiceList, currentChoice]);
  }
  //값 제거 로직
  return choiceList.filter(value => value !== currentChoice);
};
export default handleChoiceList;
