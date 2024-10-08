import { MultipleChoiceQuestionButton, ResponseBoxSection } from '../styles';
export default function MultipleChoice() {
  return (
    <ResponseBoxSection $gapColumn="20px" $gridColumn="2/5">
      <MultipleChoiceQuestionButton>1</MultipleChoiceQuestionButton>
      <MultipleChoiceQuestionButton>2</MultipleChoiceQuestionButton>
      <MultipleChoiceQuestionButton>3</MultipleChoiceQuestionButton>
      <MultipleChoiceQuestionButton>4</MultipleChoiceQuestionButton>
    </ResponseBoxSection>
  );
}
