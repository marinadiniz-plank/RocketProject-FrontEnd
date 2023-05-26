import { ReactNode, useState } from 'react';
import '../../assets/CSS/buttons.css';
import { Modal } from '../Modal/Modal';

type AddButtonProps = {
  title: string;
  children: ReactNode;
};

const AddButton: React.FC<AddButtonProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="submit" className="add_btn" onClick={() => setIsOpen(true)}>
        Add
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title} >
          {children}
        </Modal>
      )}
    </>
  );
};

export default AddButton;
