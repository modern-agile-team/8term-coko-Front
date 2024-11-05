import { HeaderIcon, HeaderIconNumber } from './style';

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
      <div>
        <HeaderIcon src={pointIcon} alt="Point Icon" />
        <HeaderIconNumber>{points}</HeaderIconNumber>
      </div>
      <div>
        <HeaderIcon src={lifeIcon} alt="Life Icon" />
        <HeaderIconNumber>{lifePoints}</HeaderIconNumber>
      </div>
    </>
  );
}
