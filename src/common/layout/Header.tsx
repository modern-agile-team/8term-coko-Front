import HeaderItem from '../ui/HeaderItem';
import { HeaderBox } from './style';

export default function Header() {
  return (
    <HeaderBox>
      <HeaderItem
        lifeIcon="https://cdn-icons-png.flaticon.com/128/25/25451.png"
        lifePoints={5}
        pointIcon="https://cdn-icons-png.flaticon.com/128/4291/4291341.png"
        points={200}
      />
    </HeaderBox>
  );
}
