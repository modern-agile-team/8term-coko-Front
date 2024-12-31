import * as S from './styles';
import { getImageUrl } from '@/utils/getImageUrl';

export default function SectionArrowButton({
  direction,
}: {
  direction: 'left' | 'right';
}) {
  const arrowImg =
    direction === 'left'
      ? `${getImageUrl('왼쪽-화살표.svg')}`
      : `${getImageUrl('오른쪽-화살표.svg')}`;

  return (
    <S.ArrowButton direction={direction}>
      <img src={arrowImg} alt={`${direction} arrow`} />
    </S.ArrowButton>
  );
}
