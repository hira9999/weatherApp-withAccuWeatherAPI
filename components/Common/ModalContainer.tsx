import React from 'react';
import Modal from './Modal';

interface ModalContainerProps {
  isModalOpen: boolean;
  modalContent: {
    [key: string]: string;
  };
  handleModal: () => void;
}

const ModalContainer = ({
  isModalOpen,
  modalContent,
  handleModal,
}: ModalContainerProps) => {
  return (
    <>
      {isModalOpen ? (
        <Modal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          handleModal={handleModal}
        />
      ) : (
        <Modal
          isModalOpen={isModalOpen}
          modalContent={modalContent}
          handleModal={handleModal}
        />
      )}
    </>
  );
};

export default ModalContainer;
