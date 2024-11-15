import {
  UpperBackgroundImg,
  ButtonWrapper,
  KeyboardButton,
  SectionTitle,
} from '../styles';
import { useNavigate } from 'react-router-dom';
import { navigateToQuizPart } from '../service/navigateToQuizPart';
import getPartGridPosition from '../../Learn/service/getPartGridPosition';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function PartNavContainer() {
  const navigate = useNavigate();

  // 백엔드에서 가져올 데이터 (현재는 임시 데이터)
  const parts = [
    { partId: 1 },
    { partId: 2 },
    { partId: 3 },
    { partId: 4 },
    { partId: 5 },
    { partId: 6 },
    { partId: 7 },
    { partId: 8 },
    { partId: 9 },
    { partId: 10 },
  ];

  return (
    <>
      <UpperBackgroundImg>
        <SectionTitle>섹션 이름</SectionTitle>
      </UpperBackgroundImg>
      <ButtonWrapper>
        {parts.map((part, index) => {
          const { gridColumn, gridRow } = getPartGridPosition(index);
          const buttonImage = `${imgUrl}키캡${(index % 4) + 1}.svg`;
          return (
            <KeyboardButton
              key={`${part.partId}`}
              style={{ gridColumn, gridRow }}
              onClick={() => navigateToQuizPart(navigate, part)}
            >
              <img src={buttonImage} alt={`키캡${index + 1}`} />
            </KeyboardButton>
          );
        })}
      </ButtonWrapper>
    </>
  );
}
