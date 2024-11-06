import { OXButton, CharacterImg, OXButtonDiv } from '../styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <OXButtonDiv>
        <OXButton type="button" onClick={() => setUserResponseAnswer('O')}>
          <img
            src={`${imgUrl}${
              userResponseAnswer[0] === 'O' ? 'O버튼.svg' : '퀴즈O버튼.svg'
            }`}
          ></img>
        </OXButton>
        <CharacterImg src={`${imgUrl}OX코코.svg`}></CharacterImg>
        <OXButton type="button" onClick={() => setUserResponseAnswer('X')}>
          <img
            src={`${imgUrl}${
              userResponseAnswer[0] === 'X' ? 'X버튼.svg' : '퀴즈X버튼.svg'
            }`}
          ></img>
        </OXButton>
      </OXButtonDiv>
    </>
  );
}
