import React, { ReactNode } from 'react';
import '../../assets/CSS/modal.css';

type ModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, title, children }) => {
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
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};
