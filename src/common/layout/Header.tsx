import * as S from '@common/ui/styles';
import { HeaderBox } from './styles';
import formatDate from '@utils/formatDate';
import { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useModal from '@hooks/useModal';
import usePopover from '@hooks/usePopover';
import useUserStore from '@store/useUserStore';
import Login from '@features/auth/ui/Login';
import ProfileImage from '@features/user/ui/ProfileImage';
import { authQuery } from '@features/auth/queries';
import HeaderItemContainer from '@/common/layout/HeaderItemContainer';
import HeaderErrorBoundary from '@/features/error/ui/HeaderErrorBoundary';
import { isLoggedIn } from '@/features/user/service/authUtils';
import { userCosmeticItemsQuery } from '@/features/user/queries';

export default function Header() {
  const { user, clearUser } = useUserStore();
  const { mutate: logout } = authQuery.logout();
  const { data: equippedItems } = userCosmeticItemsQuery.useGetEquippedItem();

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
      <HeaderErrorBoundary>
        {isLoggedIn(user) && <HeaderItemContainer user={user} />}
      </HeaderErrorBoundary>
      <S.ProfileWrapper ref={profileRef} onClick={handleProfileClick}>
        {isLoggedIn(user) ? (
          <ProfileImage size="sm" equippedItems={equippedItems} />
        ) : (
          <S.LoginButton onClick={openModal}>로그인</S.LoginButton>
        )}
        {user && isOpen && (
          <S.ProfilePopover ref={popoverRef} onClick={e => e.stopPropagation()}>
            <S.UserNameText>{user.name}</S.UserNameText>
            <S.UserJoinDate>{formatDate(user.createdAt)}</S.UserJoinDate>
            <S.UserInfoButton
              $backgroundColor="#00FAFF"
              $boxShadow="0 2px #00E1EC"
              onClick={() => navigate('/profile')}
            >
              프로필
            </S.UserInfoButton>
            {/* <S.UserInfoButton
              $backgroundColor="#3DFF4A"
              $boxShadow="0 2px #00EB6A"
              onClick={() => navigate('/setting')}
            >
              설정
            </S.UserInfoButton> */}
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
