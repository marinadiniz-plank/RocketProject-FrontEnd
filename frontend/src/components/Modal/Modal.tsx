import React, { FC } from 'react';
import '../../assets/CSS/modal.css';

type ModalProps<T> = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    form: FC<T>; // Generic form component type
    formProps: T;
};

export const Modal = <T extends object>({ isOpen, setIsOpen, title, form: FormComponent, formProps }: ModalProps<T>) => {
    const handleClose = () => {
        setIsOpen(false);
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
                        <FormComponent {...formProps} />
                    </div>
                </div>
            )}
        </>
    );
};
