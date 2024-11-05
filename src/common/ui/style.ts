import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SectionButtonProps {
  $backgroundImage: string;
}

export const SectionButton = styled.button<SectionButtonProps>`
  width: 100px;
  height: 75px;
  margin-top: 35px;
  background: none;
  border: none;
  background-image: url(${props => props.$backgroundImage});
`;

export const ArrowButton = styled.button`
  width: 36px;
  height: 36px;
`;

export const MenuButtonWrapper = styled.nav`
  display: inline-block;
`;

export const MenuButton = styled.button`
  width: 193px;
  height: 42px;
  font-size: 15px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid #ffe8c7;
  background: #f0d8a7;
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

export const HeaderIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const HeaderIconNumber = styled.span`
  font-size: 15px;
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
`;
