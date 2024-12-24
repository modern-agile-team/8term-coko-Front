import { ArrowButton } from './style';

export default function SectionArrowButton({
  direction,
}: {
  direction: 'left' | 'right';
}) {
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;
  const arrowImg =
    direction === 'left'
      ? `${imgUrl}왼쪽-화살표.svg`
      : `${imgUrl}오른쪽-화살표.svg`;

  return (
    <ArrowButton direction={direction}>
      <img src={arrowImg} alt={`${direction} arrow`} />
    </ArrowButton>
  );
}
