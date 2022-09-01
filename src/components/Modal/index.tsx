import * as SC from "../../styles/Modal";
import { FaWindowClose } from "react-icons/fa";

interface ModalProps {
  children: any;
  onClose?: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <SC.ModalContainer>
      <SC.ModalContent>
        <SC.ButtonClose onClick={onClose}>
          <FaWindowClose />
        </SC.ButtonClose>
        {children}
      </SC.ModalContent>
    </SC.ModalContainer>
  );
};
