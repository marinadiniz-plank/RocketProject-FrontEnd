import { useState } from 'react';
import '../../assets/CSS/buttons.css';
import EditModal from '../Modal/EditModal';


type ModalProps = {
  entityName: string,
  formLabels: string[],
  formPlaceholder: string[],
  // initialData: Record<number, any>;
  // onUpdate: () => void;
}

const UpdateButton: React.FC<ModalProps> = ({ entityName, formLabels, formPlaceholder, initialData, onUpdate }) => {
  // const handleUpdate = () => {
  //   onUpdate();
  //   console.log(initialData);

  //   // UpdateRocket();
  // };


  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="submit"
        className="edit_btn"
        onClick={() => { setIsOpen(true) }}>
        <i className="fa fa-pen"></i>
      </button>
      {isOpen && <EditModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={entityName}
        formLabels={formLabels}
        formPlaceholder={formPlaceholder}
      // initialData={initialData}
      // onUpdate={handleUpdate}
      />}
    </>
  );
}

export default UpdateButton;
