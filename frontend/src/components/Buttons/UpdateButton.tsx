import { ReactNode, useState } from 'react';
import '../../assets/CSS/buttons.css';
import { Modal } from '../Modal/Modal';


type EditProps = {
  title: string;
  children: ReactNode;
}

const UpdateButton: React.FC<EditProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("click");

  return (
    <>
      <button
        type="submit"
        className="edit_btn"
        onClick={() => { setIsOpen(true) }}>
        <i className="fa fa-pen"></i>
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title} >
          {children}
        </Modal>
      )}
    </>
  );
}

export default UpdateButton;
