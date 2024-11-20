import Login from '@features/login/ui/Login';
import useModal from '@hooks/useModal';
import {
  IconWrapper,
  HeaderIcon,
  HeaderIconNumber,
  ProfileWrapper,
  ProfileIcon,
} from './style';

interface HeaderItemProps {
  lifeIcon: string;
  lifePoints: number;
  pointIcon: string;
  points: number;
  profile: string;
  profileBorder: string;
}

export default function HeaderItem({
  lifeIcon,
  lifePoints,
  pointIcon,
  points,
  profile,
  profileBorder,
}: HeaderItemProps) {
  const { isShow, openModal, closeModal, Modal } = useModal();

  return (
    <>
      <IconWrapper>
        <HeaderIcon src={pointIcon} alt="Point Icon" />
        <HeaderIconNumber $color="#FFCD35">
          {points.toLocaleString()}
        </HeaderIconNumber>
      </IconWrapper>
      <IconWrapper>
        <HeaderIcon src={lifeIcon} alt="Life Icon" />
        <HeaderIconNumber $color="#FE0F0F">
          {lifePoints.toLocaleString()}
        </HeaderIconNumber>
      </IconWrapper>
      <ProfileWrapper onClick={openModal}>
        <ProfileIcon src={profileBorder} alt="Profile Border" />
        <HeaderIcon src={profile} alt="Profile Icon" />
      </ProfileWrapper>
      {/* Modal 컴포넌트 */}
      <Modal isShow={isShow}>
        <Login openModal={openModal} closeModal={closeModal} />
      </Modal>
    </>
  );
}
