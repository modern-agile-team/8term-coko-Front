import { ButtonWrapper, KeyboardButton } from '../styles';
import { useNavigate } from 'react-router-dom';
import { navigateToQuizPart } from '../service/navigateToQuizPart';

export default function PartNavButton() {
  const navigate = useNavigate();

  // 백엔드에서 가져올 데이터 (현재는 임시 데이터)
  const parts = [
    { sectionId: 1, part: 'var' },
    { sectionId: 1, part: 'let' },
    { sectionId: 1, part: 'const' },
  ];

  return (
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
  );
}
