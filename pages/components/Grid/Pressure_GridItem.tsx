import React, { useState } from 'react';
import { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { IoStopwatchSharp } from 'react-icons/io5';
import Modal from '../Common/Modal';

interface Pressure_GridItemProps {
  currentConditionData: CurrentConditionData;
}
const Pressure_GridItem = ({
  currentConditionData,
}: Pressure_GridItemProps) => {
  const modalMessage = {
    title: '기압',
    기압에_관하여:
      '기압의 급격한 변화는 날씨 변화를 예측하는 지표로 사용됩니다. 예를 들어, 기압이 떨어지면 눈이나 비가 내릴 것으로 예상할 수 있고, 반대로 기압이 올라가면 날씨가 맑아질 것으로 예상할 수 있습니다. 기압은 기압계상의 압력 또는 대기압으로도 불립니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item" onClick={handleModal}>
        <div className="grid-title">
          <IoStopwatchSharp className="mr-0.5" size={14} />
          기압
        </div>
        <span className="text-2xl">
          {currentConditionData.getCurrentCondition.Pressure.Metric.Value}hPa
        </span>
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

export default Pressure_GridItem;
