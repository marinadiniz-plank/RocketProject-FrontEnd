import { useState } from 'react';
import '../assets/CSS/buttons.css'
import Modal from './Modal';

type ModalProps = {
    entityName: string,
    formLabels: string[]
}


const AddButton: React.FC<ModalProps> = ({entityName, formLabels }) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button 
          className="add_btn"
          onClick={() => { setIsOpen(true) }}>
          <i className="fas fa-light fa-plus"></i>
            add
      </button>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={entityName} formLabels={formLabels}/>}
    </>
  );
}

export default AddButton;
