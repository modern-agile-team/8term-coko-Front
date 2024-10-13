interface ButtonProps {
  buttonName: string;
  handleClick: () => void;
}
import { ResponseButton } from '../styles';
export default function Button({ buttonName, handleClick }: ButtonProps) {
  //답을 제출하고
  return (
    <>
      <ResponseButton onClick={handleClick}>{buttonName}</ResponseButton>
    </>
  );
}
