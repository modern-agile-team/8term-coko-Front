import { Img, OXButtonSection } from '../styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <OXButtonSection>
        <button type="button" onClick={() => setUserResponseAnswer('O')}>
          <Img
            $width="160px"
            $height="110px"
            src={`${imgUrl}${
              userResponseAnswer[0] === 'O' ? 'O버튼-선택.svg' : 'O버튼.svg'
            }`}
            alt="O버튼"
          ></Img>
        </button>
        <Img
          src={`${imgUrl}OX문제-코코.svg`}
          $width="193px"
          $height="192.56px"
        ></Img>
        <button type="button" onClick={() => setUserResponseAnswer('X')}>
          <Img
            $height="110px"
            $width="160px"
            src={`${imgUrl}${
              userResponseAnswer[0] === 'X' ? 'X버튼-선택.svg' : 'X버튼.svg'
            }`}
            alt="X버튼"
          ></Img>
        </button>
      </OXButtonSection>
    </>
  );
}
