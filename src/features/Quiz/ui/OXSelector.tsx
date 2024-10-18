import { OXButton, CharacterBox, ResponseBoxSection } from '../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';
export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();
  return (
    <>
      <ResponseBoxSection>
        <OXButton
          onClick={() => setUserResponseAnswer('O')}
          $backGroundColor={userResponseAnswer[0] === 'O'}
        />
        <CharacterBox $margin="0px 102px">캐릭터 들어갈예정</CharacterBox>
        <OXButton
          onClick={() => setUserResponseAnswer('X')}
          $backGroundColor={userResponseAnswer[0] === 'X'}
        />
      </ResponseBoxSection>
    </>
  );
}
