import React, { useState } from 'react';
import Modal from '../Common/Modal';

const GridItemWithModalLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      {children}
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
      {isModalOpen ? (
        <div
          className="fixed top-0 left-0 w-full h-full z-10 cursor-pointer"
          onClick={handleModal}
        />
      ) : null}
    </>
  );
};

export default GridItemWithModalLayout;
