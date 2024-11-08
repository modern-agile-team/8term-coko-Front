import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SectionButtonProps {
  $backgroundImage: string;
}

interface MenuButtonProps {
  $activeStyle: boolean;
}

interface HeaderIconNumberProps {
  $color: string;
}

export const SectionButton = styled.button<SectionButtonProps>`
  width: 100px;
  height: 75px;
  margin-top: 75px;
  background: none;
  border: none;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
`;

export const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
`;

export const MenuButtonWrapper = styled.nav`
  display: inline-block;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  width: 193px;
  height: 42px;
  font-size: 15px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid #ffe8c7;
  background: ${({ $activeStyle }) => ($activeStyle ? '#D5B779' : '#F0D8A7')};
  margin-left: 16px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  gap: 25px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const MenuIcon = styled.img`
  width: 27px;
  height: 26px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const HeaderIcon = styled.img`
  width: 42px;
  height: 30px;
`;

export const HeaderIconNumber = styled.span<HeaderIconNumberProps>`
  font-size: 15px;
  font-weight: 700;
  margin-left: 7px;
  color: ${({ $color }) => $color};
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
`;
