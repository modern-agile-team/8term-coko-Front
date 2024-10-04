import { ResponseBoxSection, ShortAnswerInput } from '../styles';
import { CharacterBox } from '../styles';
export default function ShortAnswer() {
  return (
    <ResponseBoxSection>
      <ShortAnswerInput type="text"></ShortAnswerInput>
      <CharacterBox />
    </ResponseBoxSection>
  );
}
