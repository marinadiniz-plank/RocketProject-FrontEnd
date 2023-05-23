import React from 'react'
import '../../assets/CSS/modal.css'

type ModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  formLabels: string[]
  onSubmit: () => void
}

const AddModal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  formLabels,
  onSubmit,
}) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSubimit = () => {
    onSubmit()
  }

  const checkPlaceholder = (item: string) => {
    if (item === 'Date') {
      return 'YYYY/MM/DD'
    }
    if (item === 'Sucess') {
      return 'True'
    }
    if (item === 'Rocket' || item === 'Crew') {
      return 'Ex: 3'
    }
    if (item === 'Crewman id') {
      return 'Ex: 1, 2, 3'
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
            <h5>Let's add some {title}!</h5>
            <div className="form">
              {formLabels.map((item, index) => (
                <div key={index} className="form-field">
                  <label htmlFor={item}>{item}</label>
                  <input
                    id={item}
                    placeholder={checkPlaceholder(item)}
                    type="text"
                  />
                </div>
              ))}
            </div>
            <button className="btn" type="submit" onClick={handleSubimit}>
              <h4>Add</h4>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddModal
