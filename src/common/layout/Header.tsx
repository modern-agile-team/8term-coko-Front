import { getImageUrl } from '../../utils/getImageUrl';
import HeaderItem from '../ui/HeaderItem';
import { HeaderBox } from './style';

export default function Header() {
  const points: number = 2999999999;
  const lifePoints: number = 5;

  return (
    <HeaderBox>
      <HeaderItem
        pointIcon={getImageUrl('포인트.svg')}
        points={points}
        lifeIcon={getImageUrl('과일바구니.svg')}
        lifePoints={lifePoints}
        profile={getImageUrl('코코-프로필.svg')}
        profileBorder={getImageUrl('테두리.svg')}
      />
    </HeaderBox>
  );
}
