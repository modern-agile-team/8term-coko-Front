import { useLocation } from 'react-router-dom';
import { MenuButtonWrapper, MenuLink, MenuButton, MenuIcon } from './style';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

interface MenuItem {
  id: number;
  url: string;
  icon: string;
  title: string;
}

export default function MenuItem({ id, url, icon, title }: MenuItem) {
  const location = useLocation();
  const isActive = location.pathname === `/${url}`;

  return (
    <MenuButtonWrapper key={id}>
      <MenuLink to={`/${url}`}>
        <MenuButton $activeStyle={isActive}>
          <MenuIcon src={`${imgUrl}${icon}`} alt={`${title} 아이콘`} />
          {title}
        </MenuButton>
      </MenuLink>
    </MenuButtonWrapper>
  );
}
