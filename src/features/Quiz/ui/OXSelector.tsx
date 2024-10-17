import { useEffect, useState } from 'react';
import { OXButton, CharacterBox, ResponseBoxSection } from '../styles';
import Submit from './Submit';
import { useClientQuizStore } from '../../../store/useQuizStore';
export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  const [clientChoice, setClientChoice] = useState<string | null>(null);
  const { userResponseAnswer } = useClientQuizStore();
  useEffect(() => {
    setClientChoice(null);
  }, [userResponseAnswer]);
  return (
    <>
      <ResponseBoxSection>
        <OXButton
          onClick={() => setClientChoice('O')}
          $backGroundColor={clientChoice === 'O'}
        />
        <CharacterBox $margin="0px 102px">캐릭터 들어갈예정</CharacterBox>
        <OXButton
          onClick={() => setClientChoice('X')}
          $backGroundColor={clientChoice === 'X'}
        />
      </ResponseBoxSection>
      <Submit userSubmitAnswer={clientChoice ? [clientChoice] : null} />
    </>
  );
}
