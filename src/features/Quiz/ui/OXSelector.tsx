import { OXButton, CharacterBox, ResponseBoxSection } from '../styles';
export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  return (
    <>
      <ResponseBoxSection>
        <OXButton></OXButton>
        <CharacterBox $margin="0px 102px">캐릭터 들어갈예정</CharacterBox>
        <OXButton></OXButton>
      </ResponseBoxSection>
    </>
  );
}
