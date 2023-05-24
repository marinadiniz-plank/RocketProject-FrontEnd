import { useState } from 'react';
import '../../assets/CSS/buttons.css';
import { UpdateRocket } from '../../service/RocketService';
import EditModal from '../Modal/EditModal';


type ModalProps = {
  entityName: string,
  formLabels: string[],
  formPlaceholder: string[],
  id: number,
  onUpdate: (id: number, formData: Record<number, any>) => void
}

const UpdateButton: React.FC<ModalProps> = ({ entityName, formLabels, formPlaceholder, id, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleUpdate = (id: number, formData: Record<number, any>) => {

    onUpdate(id, formData)
    console.log(id);
    UpdateRocket(id, formData)
  }
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
        id={id}
        onUpdate={handleUpdate}
      />}
    </>
  );
}

export default UpdateButton;
