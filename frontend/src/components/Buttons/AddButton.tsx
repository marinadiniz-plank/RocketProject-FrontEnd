import { useState } from 'react';
import '../../assets/CSS/buttons.css'
import AddModal from '../Modal/AddModal';

type ModalProps = {
    entityName: string,
    formLabels: string[],
    onSubmit: () => void
}


const AddButton: React.FC<ModalProps> = ({entityName, formLabels, onSubmit }) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button 
          type="submit"
          className="add_btn"
          onClick={() => { setIsOpen(true) }}>
          <i className="fas fa-light fa-plus"></i>
            add
      </button>
      {isOpen && <AddModal isOpen={isOpen} setIsOpen={setIsOpen} title={entityName} formLabels={formLabels} onSubmit={onSubmit}/>}
    </>
  );
}

export default AddButton;
