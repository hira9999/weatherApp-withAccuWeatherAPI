import React, { useState } from 'react';
import { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { MdOutlineAir } from 'react-icons/md';
import Modal from '../Common/Modal';

interface Wind_GridItemProps {
  currentConditionData: CurrentConditionData;
}
const Wind_GridItem = ({ currentConditionData }: Wind_GridItemProps) => {
  const degree =
    currentConditionData.getCurrentCondition.Wind.Direction.Degrees;
  const { Value } = currentConditionData.getCurrentCondition.Wind.Speed.Metric;

  const modalMessage = {
    title: '바람',
    풍속과_돌풍에_관하여:
      '풍속은 짧은 기간 동안의 평균을 사용하여 계산됩니다. 돌풍은 이 평균 이상의 짧은 거센 바람으로 지속 시간은 보통 20초 미만입니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item" onClick={handleModal}>
        <div className="grid-title">
          <MdOutlineAir className="mr-1" size={15} />
          바람
        </div>
        <div className="flex h-full justify-center items-center">
          <div className="flex justify-center items-center border-white/30 border h-[110px] w-[110px] rounded-full">
            <div className="relative flex justify-center items-center h-[95px] w-[95px] rounded-full outline-dotted outline-white/30">
              <div className="absolute -top-2 w-0 h-0 border-b-white border-transparent border-b-8 border-l-4 border-r-4" />
              <div className="absolute top-0.5 opacity-50 font-bold">북</div>
              <div className="absolute right-0.5 opacity-50 font-bold">동</div>
              <div className="absolute left-0.5 opacity-50 font-bold">서</div>
              <div className="absolute bottom-0.5 opacity-50 font-bold">남</div>
              <div
                className="absolute h-[2px] bg-white w-[95px] after:content-[''] after:absolute after:w-0 after:h-0 after:border-transparent after:border-t-[10px] after:border-t-white after:border-r-[6px] after:border-l-[6px] after:rotate-[90deg] after:-left-2 after:-top-[4px] before:content-[''] before:absolute before:outline-4 before:border-2 before:rounded-full before:-right-3 before:w-3 before:h-3 before:-top-[5px]"
                style={{ transform: `rotate(${90 + degree}deg)` }}
              />
              <div className="relative flex flex-col justify-center items-center border border-white/30 rounded-full w-[50px] h-[50px] bg-white/30 z-10">
                <span className="font-bold">{Math.round(Value / 3.6)}</span>
                <span className="text-xs">m/s</span>
              </div>
            </div>
          </div>
        </div>
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
      </div>
      {isModalOpen ? (
        <div
          className="fixed top-0 left-0 w-full h-full z-10 cursor-pointer"
          onClick={handleModal}
        />
      ) : null}
    </>
  );
};

export default Wind_GridItem;
