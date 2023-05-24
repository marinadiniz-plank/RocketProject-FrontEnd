import React, { useState } from 'react';
import '../../assets/CSS/modal.css';


type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  formLabels: string[];
  onSubmit: (formData: Record<number, any>) => void;
};

const AddModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  formLabels,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title == "Crew") {

      formData["crewman"] = JSON.parse(`[${formData["crewman"]}]`)


    }
    onSubmit(formData);
    handleClose();
  };

  const checkPlaceholder = (item: string) => {
    if (item === 'date') {
      return 'YYYY/MM/DD';
    }
    if (item === 'success') {
      return 'True';
    }
    if (item === 'rocket' || item === 'crew') {
      return 'Ex: 3';
    }
    if (item === 'crewman') {
      return 'Ex: 1, 2, 3';
    }

    return item;
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
            <h5>Let's add some {title}!</h5>
            <form className="form" onSubmit={handleFormSubmit}>
              {formLabels.map((item, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={item}>{item}</label>
                  <input
                    id={item}
                    placeholder={checkPlaceholder(item)}
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button className="btn" type="submit">
                <h4>Add</h4>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddModal;
