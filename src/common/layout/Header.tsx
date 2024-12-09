import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '@utils/getImageUrl';
import { HeaderBox } from './style';
import * as S from '../ui/style';
import HeaderItem from '../ui/HeaderItem';
import Login from '@features/login/ui/Login';
import useModal from '@hooks/useModal';
import useUserStore from '@/store/useUserStore';
import useAuth from '@hooks/useAuth';
import useDropdown from '@hooks/useDropdown';
import useOutsideClick from '@hooks/useOutsideClick';
import handleLogout from '@features/login/service/handleLogout';

export default function Header() {
  const points: number = 2999999999;
  const lifePoints: number = 5;

  const navigate = useNavigate();
  const { isShow, openModal, closeModal, Modal } = useModal();
  const { user } = useUserStore();
  const { isLoggedIn } = useAuth();

  const { isOpen, toggleDropdown, closeDropdown } = useDropdown();
  const profileRef = useRef<HTMLDivElement>(null);

  // DropdownMenu가 닫히지 않도록 ProfileWrapper를 제외 대상에 추가
  const dropdownRef = useOutsideClick(closeDropdown, {
    excludeRefs: [profileRef],
  });

  const handleProfileClick = () => {
    if (isLoggedIn) {
      toggleDropdown(); // 열림/닫힘 상태 변경
    } else {
      openModal(); // 로그인 모달 열기
    }
  };

  return (
    <HeaderBox>
      {user && (
        <>
          <HeaderItem
            icon={getImageUrl('포인트.svg')}
            point={points}
            color={'#FFCD35'}
          />
          <HeaderItem
            icon={getImageUrl('과일바구니.svg')}
            point={lifePoints}
            color={'#FE0F0F'}
          />
        </>
      )}
      <S.ProfileWrapper ref={profileRef} onClick={handleProfileClick}>
        <S.ProfileIcon src={getImageUrl('테두리.svg')} alt="프로필 테두리" />
        <S.HeaderIcon src={getImageUrl('코코-프로필.svg')} alt="코코 프로필" />
        {isLoggedIn && isOpen && (
          <S.DropdownMenu ref={dropdownRef} onClick={e => e.stopPropagation()}>
            <S.UserNameText>유저이름</S.UserNameText>
            <S.UserJoinDate>2024.11.19</S.UserJoinDate>
            <S.UserInfoButton
              $backgroundColor="#00FAFF;"
              $boxShadow="0 2px #00E1EC;"
              onClick={() => navigate('/profile')}
            >
              프로필
            </S.UserInfoButton>
            <S.UserInfoButton
              $backgroundColor="#3DFF4A;"
              $boxShadow="0 2px #00EB6A;"
              onClick={() => navigate('/setting')}
            >
              설정
            </S.UserInfoButton>
            <S.UserInfoButton
              $backgroundColor="#FF3F3D;"
              $boxShadow="0 2px #EB0000;"
              onClick={handleLogout}
            >
              로그아웃
            </S.UserInfoButton>
          </S.DropdownMenu>
        )}
      </S.ProfileWrapper>
      {!isLoggedIn && (
        <Modal isShow={isShow}>
          <Login openModal={openModal} closeModal={closeModal} />
        </Modal>
      )}
    </HeaderBox>
  );
}
