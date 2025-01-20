import * as S from './styles';
import { getImageUrl } from '../../utils/getImageUrl';
import { useLocation } from 'react-router-dom';

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
    <S.MenuButtonWrapper key={id}>
      <S.MenuLink to={`/${url}`}>
        <S.MenuButton $activeStyle={isActive}>
          <S.MenuIcon src={getImageUrl(icon)} alt={`${title} 아이콘`} />
          {title}
        </S.MenuButton>
      </S.MenuLink>
    </S.MenuButtonWrapper>
  );
}
