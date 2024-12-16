import * as S from './styles';
interface TextBlockProps {
  text: string;
}
export default function TextBlock({ text }: TextBlockProps) {
  return (
    <>
      <S.EmptyDiv>{text ?? ''}</S.EmptyDiv>
    </>
  );
}
