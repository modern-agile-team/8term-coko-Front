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
  return (
    <>
      <S.ArrowButton $isHidden={isHidden} onClick={onClick}>
        <img
          src={getImageUrl(direction === 'left' ? '왼쪽-화살표.svg' : '오른쪽-화살표.svg')}
          alt={`${direction} arrow`}
        />
      </S.ArrowButton>
      <S.CompassText $isHidden={isHidden}>{compassText}</S.CompassText>
    </>
  );
}
