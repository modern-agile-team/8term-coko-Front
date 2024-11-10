import { IconWrapper, HeaderIcon, HeaderIconNumber } from './style';

interface HeaderItemProps {
  lifeIcon: string;
  lifePoints: number;
  pointIcon: string;
  points: number;
}

export default function HeaderItem({
  lifeIcon,
  lifePoints,
  pointIcon,
  points,
}: HeaderItemProps) {
  return (
    <>
      <IconWrapper>
        <HeaderIcon src={pointIcon} alt="Point Icon" />
        <HeaderIconNumber $color="#FFCD35;">
          {points.toLocaleString()}
        </HeaderIconNumber>
      </IconWrapper>
      <IconWrapper>
        <HeaderIcon src={lifeIcon} alt="Life Icon" />
        <HeaderIconNumber $color="#FE0F0F;">
          {lifePoints.toLocaleString()}
        </HeaderIconNumber>
      </IconWrapper>
    </>
  );
}
