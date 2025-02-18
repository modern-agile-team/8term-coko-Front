import MenuItem from '@common/ui/MenuItem';
import { LogoBox, MenuBox } from './styles';
import { LogoImg } from '@common/ui/styles';
import { MENUS } from './constants';
import { getImageUrl } from '@utils/getImageUrl';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@/style/constants';

export default function MenuBar() {
  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);

  return (
    <MenuBox>
      <LogoBox>
        <LogoImg src={getImageUrl('로고.svg')} alt="로고" />
      </LogoBox>
      {MENUS.map(menu => (
        <MenuItem
          key={menu.id}
          id={menu.id}
          url={menu.url}
          icon={getImageUrl(
            isMobile ? menu.icon.replace('.svg', '-모바일.svg') : menu.icon
          )}
          title={menu.title}
        />
      ))}
    </MenuBox>
  );
}
