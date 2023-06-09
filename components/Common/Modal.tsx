import React from 'react';

interface ModalProps {
  isModalOpen: boolean;
  modalContent: {
    [key: string]: string;
  };
  handleModal: () => void;
}

const Modal = ({ isModalOpen, modalContent, handleModal }: ModalProps) => {
  return (
    <>
      <div
        className={`${
          isModalOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } hidden sm:block duration-150 rounded-lg absolute z-20 w-52 h-52 transition -right-[225px] -top-6 bg-[#262626] border-[#5D6C80] border-[1px] outline outline-[1px] outline-black shadow-md`}
      >
        <div className="flex flex-col bg-[#262626] absolute z-20 w-full h-full rounded-lg scrollbar-hide overflow-y-scroll">
          {/* 툴팁 메시지가 표시되는곳 */}
          <div className="flex justify-center sticky top-0 bg-[#262626] text-white font-extrabold w-full p-1.5">
            {modalContent.title}
          </div>
          <div className="space-y-1 p-3">
            {Object.keys(modalContent)
              .slice(1)
              .map((key) => {
                return (
                  <div key={key}>
                    <h3 className="font-bold mb-2">{key.replace(/_/g, ' ')}</h3>
                    <p className="text-xs text-[#D6DEE6]">
                      {modalContent[key]}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className="absolute rounded-sm w-5 h-5 top-20 -left-2 rotate-45 border-[#5D6C80] border-[1px] bg-[#262626] backdrop-blur-md outline outline-[1px] outline-black z-0"
          onClick={handleModal}
        />
      </div>
    </>
  );
};

export default Modal;
