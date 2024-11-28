import {
  DashLineHr,
  FlexContainer,
  GoToLoginButton,
  GoToLoginForm,
  GoToLoginImg,
} from '../styles';
import Login from './Login';
import { useClientQuizStore } from '@/store/useClientQuizStore';
import { getImageUrl } from '@/utils/getImageUrl';
import useModal from '@hooks/useModal';
import { noop } from '@modern-kit/utils';
import { useEffect, useState } from 'react';
interface GoToLoginProps {
  isActive: boolean;
}
export default function GoToLogin({ isActive }: GoToLoginProps) {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const { currentPage, reset, totalResults } = useClientQuizStore();
  const [goLogin, setGoLogin] = useState<boolean>(false);
  useEffect(() => {
    if (isActive) {
      openModal();
    }
    return () => {
      if (isActive) {
        reset();
        closeModal();
      }
    };
  }, [currentPage, totalResults]);
  return (
    <Modal isShow={isShow}>
      {goLogin ? (
        <Login closeModal={noop} openModal={noop} />
      ) : (
        <FlexContainer>
          <GoToLoginForm>
            <h2>문제 더 풀려면 로그인해 !</h2>
            <GoToLoginImg src={getImageUrl('로그인키키.svg')}></GoToLoginImg>
            <DashLineHr />
            <GoToLoginButton
              onClick={() => {
                setGoLogin(true);
              }}
            >
              로그인 창으로
            </GoToLoginButton>
          </GoToLoginForm>
        </FlexContainer>
      )}
    </Modal>
  );
}
