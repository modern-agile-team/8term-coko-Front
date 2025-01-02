import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';

interface NavigationControlProps {
  direction: 'left' | 'right';
  isHidden: boolean;
  onClick: () => void;
  compassText: string;
}

export default function NavigationControl({
  direction,
  isHidden,
  onClick,
  compassText,
}: NavigationControlProps) {
  const isLeft = direction === 'left';
  const isRight = direction === 'right';

  return (
    <>
      {isLeft && (
        <>
          <S.ArrowButton onClick={onClick} $isHidden={isHidden}>
            <img src={getImageUrl('왼쪽-화살표.svg')} alt="left arrow" />
          </S.ArrowButton>
          <S.CompassText $isHidden={isHidden}>{compassText}</S.CompassText>
        </>
      )}
      {isRight && (
        <>
          <S.CompassText $isHidden={isHidden}>{compassText}</S.CompassText>
          <S.ArrowButton onClick={onClick} $isHidden={isHidden}>
            <img src={getImageUrl('오른쪽-화살표.svg')} alt="right arrow" />
          </S.ArrowButton>
        </>
      )}
    </>
  );
}
