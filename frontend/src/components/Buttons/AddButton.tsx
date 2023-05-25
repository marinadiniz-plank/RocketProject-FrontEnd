import { FC, useState } from 'react';
import '../../assets/CSS/buttons.css';
import { Modal } from '../Modal/Modal';

type AddButtonProps<T> = {
  title: string;
  form: FC<T>; // Generic form component type
  formProps: T; // Props specific to the form component
};

const AddButton = <T extends object>({ title, form: FormComponent, formProps }: AddButtonProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="submit" className="add_btn" onClick={() => setIsOpen(true)}>
        Add
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title} form={FormComponent} formProps={formProps} />
      )}
    </>
  );
};

export default AddButton;
