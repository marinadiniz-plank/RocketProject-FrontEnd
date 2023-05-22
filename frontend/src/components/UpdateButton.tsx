import { useState } from 'react';
import '../assets/CSS/buttons.css'
import Modal from './Modal';

type ModalProps = {
    entityName: string,
    formLabels: string[],
    formPlaceholder: string[]
}

const UpdateButton: React.FC<ModalProps> = ({entityName, formLabels, formPlaceholder }) => {

  const [isOpen, setIsOpen] = useState(false);
  // console.log(formPlaceholder);
  
  return (
    <>
    <button 
        type="submit"
        className="edit_btn"
        onClick={() => { setIsOpen(true) }}>
          <i className="fa fa-pen"></i>
    </button>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={entityName} formLabels={formLabels} formPlaceholder={formPlaceholder} action={"update"}/>}
    </>
  );
}

export default UpdateButton;
