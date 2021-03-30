import React from 'react';
import Modal from 'react-modal';
import Form from '../Form';
import s from './CustomSearch.module.css';

const customStyles = {
  content: {
    background: '#d4d4d0',
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal');

export default function CustomSearch() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={s.wrap}>
      <div className={s.panel}>
        <button onClick={openModal} className={s.button}>
          Custom search
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {<Form />}
      </Modal>
    </div>
  );
}
