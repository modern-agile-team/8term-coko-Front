import * as S from '../ui/style';
import { HeaderBox } from './style';
import { getImageUrl } from '@utils/getImageUrl';
import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useModal from '@hooks/useModal';
import usePopover from '@hooks/usePopover';
import useUserStore from '@store/useUserStore';
import HeaderItem from '../ui/HeaderItem';
import Login from '@features/auth/ui/Login';
import ProfileImage from '@features/user/ui/ProfileImage';
import { authQuery } from '@features/auth/queries';

export default function Header() {
  const { user, clearUser } = useUserStore();
  const { mutate: logout } = authQuery.logout();
  const { isShow, openModal, closeModal, Modal } = useModal();
  const navigate = useNavigate();

  const profileRef = useRef<HTMLDivElement>(null);
  const { isOpen, togglePopover, popoverRef } = usePopover({
    excludeRefs: [profileRef],
  });

  const handleProfileClick = useCallback(() => {
    if (user) {
      togglePopover();
    } else {
      openModal();
    }
  }, [user, togglePopover, openModal]);

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        clearUser();
        window.location.href = '/';
      },
      onError: error => {
        console.error('Logout failed:', error);
      },
    });
  };

  return (
    <HeaderBox>
      {user && (
        <>
          <HeaderItem
            icon={getImageUrl('포인트.svg')}
            point={user.point}
            color={'#FFCD35'}
          />
          <HeaderItem
            icon={getImageUrl('과일바구니.svg')}
            point={5}
            color={'#FE0F0F'}
          />
        </>
      )}
      <S.ProfileWrapper ref={profileRef} onClick={handleProfileClick}>
        <ProfileImage isIcon={true} />
        {user && isOpen && (
          <S.ProfilePopover ref={popoverRef} onClick={e => e.stopPropagation()}>
            <S.UserNameText>{user.name}</S.UserNameText>
            <S.UserJoinDate>2024.12.24</S.UserJoinDate>
            <S.UserInfoButton
              $backgroundColor="#00FAFF"
              $boxShadow="0 2px #00E1EC"
              onClick={() => navigate('/profile')}
            >
              프로필
            </S.UserInfoButton>
            <S.UserInfoButton
              $backgroundColor="#3DFF4A"
              $boxShadow="0 2px #00EB6A"
              onClick={() => navigate('/setting')}
            >
              설정
            </S.UserInfoButton>
            <S.UserInfoButton
              $backgroundColor="#FF3F3D"
              $boxShadow="0 2px #EB0000"
              onClick={handleLogout}
            >
              로그아웃
            </S.UserInfoButton>
          </S.ProfilePopover>
        )}
      </S.ProfileWrapper>
      {!user && (
        <Modal isShow={isShow}>
          <Login openModal={openModal} closeModal={closeModal} />
        </Modal>
      )}
    </HeaderBox>
  );
}
