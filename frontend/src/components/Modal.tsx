import React from 'react'
import '../assets/CSS/modal.css'

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  formLabels: string[]
  action: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  formLabels,
  action,
}) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  const checkPlaceholder = (item: string, action: string) => {
  
    //TODO: implementar placeholder de update (chamar mais um paramentro)
    if (action === 'add') {
        if (item === 'Date') {
          return 'YYYY/MM/DD'
        }
        if (item === 'Sucess') {
          return 'True'
        }
        if (item === 'Rocket' || item === 'Crew') {
          return 'Ex: 3'
        }
        if (item === 'Crewman') {
          return 'Ex: 1, 2, 3'
        }
    }
    return item
  }
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
              Let's {action} some {title}!
            </h5>
            <div className="form">
              {formLabels.map((item, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={item}>{item}</label>
                  <input
                    id={item}
                    placeholder={checkPlaceholder(item, action)}
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

export default Modal
