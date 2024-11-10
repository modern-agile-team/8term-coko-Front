import HeaderItem from '../ui/HeaderItem';
import { HeaderBox } from './style';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function Header() {
  // 임시 데이터
  const points: number = 2999999999;
  const lifePoints: number = 5;

  return (
    <HeaderBox>
      <HeaderItem
        pointIcon={`${imgUrl}포인트.svg`}
        points={points}
        lifeIcon={`${imgUrl}과일바구니.svg`}
        lifePoints={lifePoints}
      />
    </HeaderBox>
  );
}
