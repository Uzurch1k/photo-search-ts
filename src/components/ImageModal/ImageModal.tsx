import { useEffect } from 'react';
import Modal from 'react-modal';

import css from './ImageModal.module.scss';

const customStyles: Modal.Styles = {
  overlay: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: 'blur(7px)',
    backgroundColor: 'rgba(97, 102, 106, 0.82)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: 0,
    border: 0,
    overflow: 'hidden',
  },
};

interface ImageModalProps {
  selectedImage: string | null;
  modalIsOpen: boolean;
  closeModal: () => void;
}

function ImageModal({
  selectedImage,
  modalIsOpen,
  closeModal,
}: ImageModalProps) {
  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    if (modalIsOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [modalIsOpen, closeModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div onClick={closeModal} className={css.content}>
        {selectedImage && <img src={selectedImage} alt="" />}
      </div>
    </Modal>
  );
}

export default ImageModal;
