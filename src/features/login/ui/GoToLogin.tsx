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
import { useEffect, useState } from 'react';
export default function GoToLogin() {
  const { Modal, closeModal, isShow, openModal } = useModal();
  const { totalResults, currentPage, reset } = useClientQuizStore();
  const [goLogin, setGoLogin] = useState<boolean>(false);
  useEffect(() => {
    if (totalResults.length === 2) {
      openModal();
    }
    return () => {
      if (totalResults.length === 2) {
        reset();
      }
    };
  }, [currentPage]);
  return (
    <Modal isShow={isShow}>
      {goLogin ? (
        <Login closeModal={closeModal} openModal={openModal} />
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
