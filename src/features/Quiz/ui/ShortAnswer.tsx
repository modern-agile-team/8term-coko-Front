import { ResponseBoxSection, ShortAnswerInput } from '../styles';
import { CharacterBox } from '../styles';
export default function ShortAnswer() {
  return (
    <ResponseBoxSection $justifyContent="flex-end">
      <ShortAnswerInput type="text"></ShortAnswerInput>
      <CharacterBox $margin="0px 0px 0px 118px" />
    </ResponseBoxSection>
  );
}
