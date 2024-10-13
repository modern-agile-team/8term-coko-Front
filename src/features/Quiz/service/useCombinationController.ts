import { useState } from 'react';

const useCombinationController = () => {
  const [choiceList, setChoiceList] = useState<string[]>([]);
  const handleChoiceList = (currentValue: string) => {
    //없다면 배열에 현재값 추가 이미 값이 있으면 제거
    if (!choiceList.includes(currentValue)) {
      setChoiceList(prev => [...prev, currentValue]);
    } else {
      setChoiceList(prev => prev.filter(value => value !== currentValue));
    }
  };

  return [choiceList, handleChoiceList] as const;
};
export default useCombinationController;
