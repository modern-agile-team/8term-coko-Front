import MenuItem from '@common/ui/MenuItem';
import { LogoBox, MenuBox } from './styles';
import { LogoImg } from '@/common/ui/styles';
import { MENUS } from './constants';
import { getImageUrl } from '@utils/getImageUrl';

export default function MenuBar() {
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
          icon={menu.icon}
          title={menu.title}
        />
      ))}
    </MenuBox>
  );
}
