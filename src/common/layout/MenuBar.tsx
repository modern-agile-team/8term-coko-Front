import MenuItem from '../ui/MenuItem';
import { MenuBox } from './style';

export default function MenuBar() {
  const menus = [
    { id: 1, title: '학습', url: 'learn', icon: '학습-아이콘.svg' },
    { id: 2, title: '랭킹', url: 'ranking', icon: '랭킹-아이콘.svg' },
    { id: 3, title: '퀘스트', url: 'quest', icon: '퀘스트-아이콘.svg' },
    { id: 4, title: '상점', url: 'store', icon: '상점-아이콘.svg' },
    { id: 5, title: '프로필', url: 'profile', icon: '프로필-아이콘.svg' },
    { id: 6, title: '설정', url: 'setting', icon: '설정-아이콘.svg' },
  ];

  return (
    <MenuBox>
      {menus.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          id={menuItem.id}
          url={menuItem.url}
          icon={menuItem.icon}
          title={menuItem.title}
        />
      ))}
    </MenuBox>
  );
}
