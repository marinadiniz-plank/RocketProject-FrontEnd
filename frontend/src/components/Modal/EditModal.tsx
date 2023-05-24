import React, { useState } from 'react'
import '../../assets/CSS/modal.css'

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  formLabels: string[],
  formPlaceholder: string[],
  id: number,
  onUpdate: (id: number, formData: Record<number, any>) => void;
}

const EditModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  formLabels,
  formPlaceholder,
  id,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<Record<number, any>>({});

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(id);

    onUpdate(id, formData);
    handleClose();
  };

  const checkPlaceholder = (index: number) => {
    return formPlaceholder[index] || '';
  };


  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={handleClose}>
              &times;
            </button>
            <h2>{title}</h2>
            <h5>Let's update some {title}!</h5>
            <form className="form" onSubmit={handleFormSubmit} >
              {formLabels.map((item, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={item}>{item}</label>
                  <input
                    id={item}
                    placeholder={checkPlaceholder(index)}
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button className="btn" type="submit">
                <h4>Update</h4>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditModal
