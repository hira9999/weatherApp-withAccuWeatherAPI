import React, { useState } from 'react';
import ModalContainer from '../Common/ModalContainer';

interface WeatherGridLayoutProps {
  modalContent: {
    [key: string]: string;
  };
  children: React.ReactNode;
}

const WeatherGridLayout = ({
  children,
  modalContent,
}: WeatherGridLayoutProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative pb-[100%] h-full">
        <div
          className="grid-item absolute w-full h-full p-2"
          onClick={handleModal}
        >
          {children}
          <ModalContainer
            isModalOpen={isModalOpen}
            modalContent={modalContent}
            handleModal={handleModal}
          />
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-full h-full z-10 cursor-pointer`}
        onClick={handleModal}
      />
    </>
  );
};

export default WeatherGridLayout;
