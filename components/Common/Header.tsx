import React from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';

const Header = () => {
  return (
    <header className="fixed w-full flex justify-end">
      <IoMdRefresh
        className="cursor-pointer mt-4 mr-4 transition-colors duration-300 hover:text-black"
        size={32}
      />
      <AiOutlineAim
        className="cursor-pointer mt-4 mr-4 transition-colors duration-300 hover:text-black"
        size={30}
      />
    </header>
  );
};

export default Header;
