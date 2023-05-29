import React, { useState } from 'react';
import '../../../assets/CSS/form.css';
import { Data } from './LaunchData';


export type FormProps = {
  initialData: Data;
  onSubmit: (id: number, formData: Data) => void;
};

export const LaunchEditForm: React.FC<FormProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Data>(initialData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData.id, formData);

    console.log(formData);
  };

  return (
    <>
      <h5 className='form-h5'>Please, give a new name for this launch</h5>
      <form className="form" onSubmit={handleFormSubmit} >

        <div className="form-field">
          <label htmlFor={"launchCode"}>Launch Code:</label>
          <input
            id={"launchCode"}
            value={formData.launchCode}
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor={"date"}>Date:</label>
          <input
            id={"date"}
            value={new Date(formData.date).toLocaleDateString()}

            type="date"
            onChange={handleInputChange}
          />
          <label htmlFor={"success"}>Success:</label>
          <input
            id={"success"}
            value={formData.success.toString()}
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor={"rocket"}>Rocket:</label>
          <input
            id={"rocket"}
            value={formData.rocket.id}
            type="text"
            onChange={handleInputChange}
          />
          <label htmlFor={"crew"}>Crew:</label>
          <input
            id={"crew"}
            value={formData.crew.id}
            type="text"
            onChange={handleInputChange}
          />
        </div>

        <button className="btn" type="submit">
          <h4>Update</h4>
        </button>
      </form>
    </>
  );
};
