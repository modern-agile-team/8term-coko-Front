import { getImageUrl } from '@utils/getImageUrl';
import HeaderItem from '../ui/HeaderItem';
import { HeaderBox } from './style';
import Login from '@features/login/ui/Login';
import { ProfileWrapper, ProfileIcon, HeaderIcon } from '../ui/style';
import useModal from '@hooks/useModal';

export default function Header() {
  const points: number = 2999999999;
  const lifePoints: number = 5;
  const { isShow, openModal, closeModal, Modal } = useModal();

  return (
    <HeaderBox>
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
      <ProfileWrapper onClick={openModal}>
        <ProfileIcon src={getImageUrl('테두리.svg')} alt="프로필 테두리" />
        <HeaderIcon src={getImageUrl('코코-프로필.svg')} alt="코코 프로필" />
      </ProfileWrapper>
      {/* Modal 컴포넌트 */}
      <Modal isShow={isShow}>
        <Login openModal={openModal} closeModal={closeModal} />
      </Modal>
    </HeaderBox>
  );
}
