import { UpperBackgroundImg, ButtonWrapper, KeyboardButton } from '../styles';
import { useNavigate } from 'react-router-dom';
import { navigateToQuizPart } from '../service/navigateToQuizPart';
import getPartGridPosition from '../../Learn/service/getPartGridPosition';

export default function PartNavContainer() {
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;
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
      <UpperBackgroundImg src={`${imgUrl}배경1.webp`} />
      <ButtonWrapper>
        {parts.map((part, index) => {
          const { gridColumn, gridRow } = getPartGridPosition(index);
          return (
            <KeyboardButton
              key={`${part.partId}`}
              style={{ gridColumn, gridRow }}
              onClick={() => navigateToQuizPart(navigate, part)}
            >
              {part.partId}
            </KeyboardButton>
          );
        })}
      </ButtonWrapper>
    </>
  );
}
