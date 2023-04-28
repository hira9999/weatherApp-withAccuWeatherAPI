import React from 'react';
import Modal from './Modal';

interface ModalContainerProps {
  isModalOpen: boolean;
  modalMessage: {
    [key: string]: string;
  };
  handleModal: () => void;
}

const ModalContainer = ({
  isModalOpen,
  modalMessage,
  handleModal,
}: ModalContainerProps) => {
  return (
    <>
      {isModalOpen ? (
        <Modal
          isModalOpen={isModalOpen}
          modalMessage={modalMessage}
          handleModal={handleModal}
        />
      ) : (
        <Modal
          isModalOpen={isModalOpen}
          modalMessage={modalMessage}
          handleModal={handleModal}
        />
      )}
    </>
  );
};

export default ModalContainer;
