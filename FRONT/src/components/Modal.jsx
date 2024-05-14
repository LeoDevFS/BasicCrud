import './modal.css'
import InputUpdate from './InputUpdate'

function Modal({ isOpen, closeModal }) {
    if (!isOpen) return null


    return (
        <div className="modal">
            <button onClick={closeModal}>Close</button>

            <div className="container">
                < InputUpdate />
            <button onClick={closeModal}>CANCEL</button>
            <button>UPDATE</button>
            </div>
        </div>
    )
}

export default Modal