import { Link } from 'react-router-dom';
import { MenuButtonWrapper, MenuButton } from './style';

const menuItems = [
  { title: '학습', url: 'learn' },
  { title: '랭킹', url: 'ranking' },
  { title: '퀘스트', url: 'quest' },
  { title: '상점', url: 'store' },
  { title: '프로필', url: 'profile' },
  { title: '설정', url: 'setting' },
];

export default function Menu() {
  return (
    <>
      {menuItems.map((value, index) => (
        <MenuButtonWrapper key={index}>
          <Link to={`/${value.url}`}>
            <MenuButton>{value.title}</MenuButton>
          </Link>
        </MenuButtonWrapper>
      ))}
    </>
  );
}
