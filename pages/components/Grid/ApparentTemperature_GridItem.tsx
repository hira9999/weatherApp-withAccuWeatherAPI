import React, { useState } from 'react';
import { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { CiTempHigh } from 'react-icons/ci';
import Modal from '../Common/Modal';
interface ApparentTemperature_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const ApparentTemperature_GridItem = ({
  currentConditionData,
}: ApparentTemperature_GridItemProps) => {
  const apparentTemp = Math.round(
    currentConditionData.getCurrentCondition.ApparentTemperature.Metric.Value
  );
  const modalMessage = {
    title: '체감 온도',
    체감_온도에_관하여:
      '체감 온도는 습도와 바람의 영향으로 인해 실제 온도보다 더 따뜻하거나 더 춥게 느껴지는 온도로, 실제 온도와는 차이가 있을 수 있습니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative grid-item" onClick={handleModal}>
        <div className="grid-title">
          <CiTempHigh className="mr-0.5" size={14} />
          체감온도
        </div>
        <span className="text-3xl">{apparentTemp}°</span>
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

export default ApparentTemperature_GridItem;
