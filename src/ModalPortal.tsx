import { PropsWithChildren } from 'react';
import ReactDom from 'react-dom';
export default function ModalPortal({ children }: PropsWithChildren) {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDom.createPortal(children, modalRoot);
}
