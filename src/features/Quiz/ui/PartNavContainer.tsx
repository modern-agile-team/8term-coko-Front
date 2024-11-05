import { UpperBackgroundImg, ButtonWrapper, KeyboardButton } from '../styles';
import { useNavigate } from 'react-router-dom';
import { navigateToQuizPart } from '../service/navigateToQuizPart';

export default function PartNavContainer() {
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;
  const navigate = useNavigate();

  // 백엔드에서 가져올 데이터 (현재는 임시 데이터)
  const parts = [
    { sectionId: 1, part: 'var' },
    { sectionId: 1, part: 'let' },
    { sectionId: 1, part: 'const' },
    { sectionId: 2, part: 'alert' },
    { sectionId: 2, part: 'prompt' },
    { sectionId: 2, part: 'confirm' },
  ];

  return (
    <>
      <UpperBackgroundImg src={`${imgUrl}배경1.webp`} />
      <ButtonWrapper>
        {parts.map(({ sectionId, part }) => (
          <KeyboardButton
            key={`${sectionId}-${part}`}
            onClick={() => navigateToQuizPart(navigate, { sectionId, part })}
          >
            {part}
          </KeyboardButton>
        ))}
      </ButtonWrapper>
    </>
  );
}
