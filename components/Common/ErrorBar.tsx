import React from 'react';

interface ErrorBarProps {
  error?: GeolocationPositionError;
  handlePermissionChange: () => void;
}

const ErrorBar = ({ error, handlePermissionChange }: ErrorBarProps) => {
  return (
    <div
      className={`${
        error ? 'top-0' : '-top-12'
      } fixed w-full bg-[#292A2D] text-center p-1 text-sm duration-700 transition-all cursor-pointer hover:underline`}
      onClick={handlePermissionChange}
    >
      {error?.message || '위치를 불러오는데 실패했습니다.'} (위치 엑세스를
      허용한뒤 클릭하여 재시도 하십시오)
    </div>
  );
};

export default ErrorBar;
