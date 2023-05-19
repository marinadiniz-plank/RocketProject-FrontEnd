import { useState } from 'react';
import '../assets/CSS/buttons.css'
import Modal from './Modal';

type ModalProps = {
    entityName: string,
    formLabels: string[]
}

const UpdateButton: React.FC<ModalProps> = ({entityName, formLabels }) => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <button 
        className="edit_btn"
        onClick={() => { setIsOpen(true) }}>
          <i className="fa fa-pen"></i>
    </button>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={entityName} formLabels={formLabels} action={"update"}/>}
    </>
  );
}

export default UpdateButton;
