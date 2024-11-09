import { Img, OXButtonSection } from '../styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;

export default function OXSelector() {
  //OX버튼을 눌러 답을 제출함
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();

  return (
    <>
      <OXButtonSection>
        <button type="button" onClick={() => setUserResponseAnswer('O')}>
          <Img
            $width="160px"
            $height="110px"
            src={`${IMG_BASE_URL}${
              userResponseAnswer[0] === 'O' ? 'O버튼-선택.svg' : 'O버튼.svg'
            }`}
            alt="O버튼"
          />
        </button>
        <Img
          src={`${IMG_BASE_URL}OX문제-코코.svg`}
          $width="193px"
          $height="192.56px"
        />
        <button type="button" onClick={() => setUserResponseAnswer('X')}>
          <Img
            $height="110px"
            $width="160px"
            src={`${IMG_BASE_URL}${
              userResponseAnswer[0] === 'X' ? 'X버튼-선택.svg' : 'X버튼.svg'
            }`}
            alt="X버튼"
          />
        </button>
      </OXButtonSection>
    </>
  );
}
