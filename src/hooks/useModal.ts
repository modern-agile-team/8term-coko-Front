import { useState } from 'react';
import Modal from '../common/layout/Modal';
/**
 * @description 모달을 쉽게 띄우기 위해 만들어진 커스텀 훅 입니다.
 *
 * @return isShow, openModal, closeModal, Modal 순서대로 현재 모달이 띄워진 상태인지를 알려주는 isShow 이를 쉽게 열고닫을 수 있는 handle함수,
 * childern을 모달로 띄울 수 있는 Modal 컴포넌트가 리턴됩니다.
 * @example const {isShow, openModal, closeModal, Modal} = useModal()
 * <button onClick={openModal}/>
 *  <Modal isShow={isShow}><ChildernComponent closeModal={closeModal}></Modal>
 * */
const useModal = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const openModal = () => setIsShow(true);
  const closeModal = () => setIsShow(false);
  return { isShow, openModal, closeModal, Modal };
};
export default useModal;
