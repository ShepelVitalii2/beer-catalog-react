import React from 'react';
import Modal from 'react-modal';
import CustomForm from '../CustomForm';
import s from './CustomSearch.module.css';

const customStyles = {
  content: {
    background: 'rgb(174, 180, 182)',
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

export default function CustomSearch({
  filteredByAttenL,
  filteredByAttenM,
  filteredByABV,
}) {
  // console.log(props);
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
        {
          <CustomForm
            onRequestClose={closeModal}
            filteredByAttenL={filteredByAttenL}
            filteredByAttenM={filteredByAttenM}
            filteredByABV={filteredByABV}
          />
        }
      </Modal>
    </div>
  );
}
