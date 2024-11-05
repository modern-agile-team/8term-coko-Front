import { MenuButtonWrapper, MenuLink, MenuButton, MenuIcon } from './style';

const menuItems = [
  { title: '학습', url: 'learn', icon: '학습-아이콘.svg' },
  { title: '랭킹', url: 'ranking', icon: '랭킹-아이콘.svg' },
  { title: '퀘스트', url: 'quest', icon: '퀘스트-아이콘.svg' },
  { title: '상점', url: 'store', icon: '상점-아이콘.svg' },
  { title: '프로필', url: 'profile', icon: '프로필-아이콘.svg' },
  { title: '설정', url: 'setting', icon: '설정-아이콘.svg' },
];

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export default function Menu() {
  return (
    <>
      {menuItems.map((value, index) => (
        <MenuButtonWrapper key={index}>
          <MenuLink to={`/${value.url}`}>
            <MenuButton>
              <MenuIcon
                src={`${imgUrl}${value.icon}`}
                alt={`${value.title} 아이콘`}
              />
              {value.title}
            </MenuButton>
          </MenuLink>
        </MenuButtonWrapper>
      ))}
    </>
  );
}
