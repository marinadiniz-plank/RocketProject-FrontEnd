import React, { useState } from 'react';
import '../../../assets/CSS/form.css';
import { Data } from './LaunchData';


export type FormProps = {
  onSubmit: (formData: Data) => void;
};

export const LaunchAddForm: React.FC<FormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Data>({ id: 0, launchCode: 0, date: '', success: false, rocket: { id: 0, name: '' }, crew: { id: 0, name: '', crewman: [] } });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData["rocket"] = JSON.parse(`${formData.rocket}`)
    formData["crew"] = JSON.parse(`${formData.crew}`)

    const successString = formData["success"].toString();
    formData["success"] = successString === "true";
    console.log(formData);

    onSubmit(formData);
    const modal = document.querySelector('.modal') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  };

  return (
    <>
      <h5 className='form-h5'>Please, provide a name for this new crew</h5>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <label htmlFor="launchCode">Launch Code:</label>
          <input
            id="launchCode"
            placeholder="3A0B"
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            placeholder="YYYY/MM/DD"
            type="date"
            onChange={handleInputChange}
          />
          <label htmlFor="success">Success:</label>
          <input
            id="success"
            placeholder="True"
            type="boolean"
            onChange={handleInputChange}
          />
          <label htmlFor="rocket">Rocket:</label>
          <input
            id="rocket"
            placeholder="Ex: 1"
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor="crew">Crew:</label>
          <input
            id="crew"
            placeholder="Ex: 3"
            type="text"
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
