import { useClientQuizStore } from '../../../store/useQuizStore';
import { ResponseBoxSection, ShortAnswerInput } from '../styles';
import { CharacterBox } from '../styles';
import Submit from './Submit';
import { useEffect, useState } from 'react';
export default function ShortAnswer() {
  const [inputValue, setInputValue] = useState<string>('');
  const { userResponseAnswer } = useClientQuizStore();
  useEffect(() => {
    setInputValue('');
  }, [userResponseAnswer]);
  return (
    <>
      <ResponseBoxSection $justifyContent="flex-end">
        <ShortAnswerInput
          type="text"
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        ></ShortAnswerInput>
        <CharacterBox $margin="0px 0px 0px 118px" />
      </ResponseBoxSection>
      <Submit userSubmitAnswer={inputValue ? [inputValue] : null} />
    </>
  );
}
