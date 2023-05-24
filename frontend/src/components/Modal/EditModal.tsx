import React from 'react'
import '../../assets/CSS/modal.css'

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  formLabels: string[],
  formPlaceholder: string[],
}

const EditModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  formLabels,
  formPlaceholder
}) => {
  const handleClose = () => {
    setIsOpen(false)
  }

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
            <h5>
              Let's update some {title}!
            </h5>
            <div className="form">
              {formLabels.map((item, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={item}>{item}</label>
                  <input
                    id={item}
                    placeholder={checkPlaceholder(index)}
                    type="text"
                  />
                </div>
              ))}
            </div>
            <button className="btn" type="submit">
              <h4>Add</h4>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default EditModal
