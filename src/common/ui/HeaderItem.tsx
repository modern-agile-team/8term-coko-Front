import { IconWrapper, HeaderIcon } from './styles';

interface HeaderItemProps {
  icon: string;
  point: number;
  color: string;
}

export default function HeaderItem({ icon, point, color }: HeaderItemProps) {
  return (
    <>
      <IconWrapper $color={color}>
        <HeaderIcon src={icon} />
        <p>{point.toLocaleString()}</p>
      </IconWrapper>
    </>
  );
}
