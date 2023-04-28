import React from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';

interface HeaderProps {
  refetchAllWeatherData: () => Promise<void>;
  findAccurateLocation: () => Promise<void>;
}

const Header = ({
  refetchAllWeatherData,
  findAccurateLocation,
}: HeaderProps) => {
  return (
    <header className="fixed w-full flex justify-end">
      <IoMdRefresh
        onClick={refetchAllWeatherData}
        className="cursor-pointer mt-4 mr-4 transition-colors duration-300 hover:text-black"
        size={32}
      />
      <AiOutlineAim
        onClick={findAccurateLocation}
        className="cursor-pointer mt-4 mr-4 transition-colors duration-300 hover:text-black"
        size={30}
      />
    </header>
  );
};

export default Header;
