import { useState } from 'react';
import { OXButton, CharacterBox, ResponseBoxSection } from '../styles';
import Submit from './Submit';
export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  const [clientChoice, setClientChoice] = useState<string>('');
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
      <Submit userSubmitAnswer={[clientChoice]}></Submit>
    </>
  );
}
