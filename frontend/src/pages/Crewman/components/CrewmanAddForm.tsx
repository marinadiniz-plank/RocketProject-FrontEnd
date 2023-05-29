import React, { useState } from 'react';
import '../../../assets/CSS/form.css';
import { Data } from './CrewmanData';

export type FormProps = {
  onSubmit: (formData: Data) => void;
};

export const CrewmanAddForm: React.FC<FormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Data>({ id: 0, name: '', patent: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);

    const modal = document.querySelector('.modal') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  };

  return (
    <>
      <h5 className='form-h5'>Please, provide a name for this new crewman</h5>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            placeholder="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="patent">Patent:</label>
          <input
            id="patent"
            placeholder="patent"
            type="text"
            value={formData.patent}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn" type="submit">
          <h4>Add</h4>
        </button>
      </form>
    </>
  );
};
