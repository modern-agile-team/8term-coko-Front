import * as S from '@common/ui/styles';
import { HeaderBox, GoBackButton, GoBackImg } from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import formatDate from '@utils/formatDate';
import { useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useModal from '@hooks/useModal';
import usePopover from '@hooks/usePopover';
import useUserStore from '@store/useUserStore';
import HeaderItem from '@common/ui/HeaderItem';
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

  const location = useLocation();
  const isQuiz = location.pathname === '/quiz';

  return (
    <HeaderBox>
      {isQuiz && (
        <GoBackButton onClick={() => navigate(-1)}>
          <GoBackImg src={getImageUrl('뒤로가기-버튼.svg')} alt="뒤로가기" />
        </GoBackButton>
      )}
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
            <S.UserJoinDate>{formatDate(user.createdAt)}</S.UserJoinDate>
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
