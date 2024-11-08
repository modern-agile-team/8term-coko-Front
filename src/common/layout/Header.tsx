import HeaderItem from '../ui/HeaderItem';
import { HeaderBox } from './style';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function Header() {
  return (
    <HeaderBox>
      <HeaderItem
        pointIcon={`${imgUrl}골드.svg`}
        points={500}
        lifeIcon={`${imgUrl}과일바구니.svg`}
        lifePoints={5}
      />
    </HeaderBox>
  );
}
