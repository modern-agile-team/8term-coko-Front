import { useLocation } from 'react-router-dom';
import { MenuButtonWrapper, MenuLink, MenuButton, MenuIcon } from './style';
import { getImageUrl } from '../../utils/getImageUrl';

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
          <MenuIcon src={getImageUrl(icon)} alt={`${title} 아이콘`} />
          {title}
        </MenuButton>
      </MenuLink>
    </MenuButtonWrapper>
  );
}
