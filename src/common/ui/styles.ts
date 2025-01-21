import styled from 'styled-components';
import { media } from '@style/media';
import { animations } from '@/style/animations';
import { Link } from 'react-router-dom';

interface UserInfoButtonProps {
  $backgroundColor: string;
  $boxShadow: string;
}

export const MenuButtonWrapper = styled.div`
  display: inline-block;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 193px;
  height: 42px;
  margin: 0 16px;

  ${media.mobile} {
    width: 48px;
    height: 48px;
    margin: 0;
  }
`;

export const MenuButton = styled.button<{ $activeStyle: boolean }>`
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid
    ${({ $activeStyle }) => ($activeStyle ? '#A69782' : '#FFE8C7')};
  background: ${({ $activeStyle }) => ($activeStyle ? '#D5B779' : '#F0D8A7')};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 30px;
  gap: 25px;

  ${media.mobile} {
    font-size: 0;
    padding: 0;
    gap: 0;
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const MenuIcon = styled.img`
  width: 27px;
  height: 26px;

  ${media.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const IconWrapper = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 15px;
  font-weight: 700;
  margin-left: 7px;
  gap: 7px;
  color: ${({ $color }) => $color};
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

export const ProfileWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ProfilePopover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 3px;
  right: 0;
  cursor: default;
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 15px;
  border: 3px solid #ffb53d;
  animation: ${animations.slideIn} 0.3s ease-out;
`;

export const UserNameText = styled.p`
  color: #000;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
`;

export const UserJoinDate = styled.p`
  font-weight: 300;
  color: #cbcbcb;
  font-size: 12px;
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
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 25px;
`;
