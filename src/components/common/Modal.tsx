import { ReactNode } from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components'

type ModalProps = {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const modalRoot = document.getElementById('root')
  return ReactDom.createPortal(
    <ModalOverlay>
      <ModalContent>{children}</ModalContent>
    </ModalOverlay>,
    modalRoot as HTMLElement,
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 200;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fff;

  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default Modal
