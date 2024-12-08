import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SectionButtonProps {
  $backgroundImage: string;
}

interface MenuButtonProps {
  $activeStyle: boolean;
}

interface IconWrapperProps {
  $color: string;
}

interface UserInfoButtonProps {
  $backgroundColor: string;
  $boxShadow: string;
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
  border: 2px solid
    ${({ $activeStyle }) => ($activeStyle ? '#A69782' : '#FFE8C7')};
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

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 15px;
  font-weight: 700;
  margin-left: 7px;
  gap: 7px;
  color: ${({ $color }) => $color};
`;

export const ProfileWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ProfileIcon = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 1;
`;

export const HeaderIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const LogoImg = styled.img`
  width: 147px;
  height: 117px;
`;

export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 3px;
  right: 0;
  cursor: default;
  width: 150px;
  height: 180px;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #ffb53d;
`;

export const UserInfoButton = styled.button<UserInfoButtonProps>`
  width: 80%;
  height: 30px;
  margin-top: 12px;
  border: none;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  border-radius: 6px;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  &:hover {
    transform: translateY(-2px);
    transition: background-color 0.2s ease, transform 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
  }
`;
