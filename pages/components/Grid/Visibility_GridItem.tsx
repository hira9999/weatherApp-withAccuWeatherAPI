import React, { useState } from 'react';
import type { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { IoEyeSharp } from 'react-icons/io5';
import ModalContainer from '../Common/ModalContainer';

interface Visibility_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const Visibility_GridItem = ({
  currentConditionData,
}: Visibility_GridItemProps) => {
  const visibility = Math.round(
    currentConditionData.getCurrentCondition.Visibility.Metric.Value
  );
  const { Unit } = currentConditionData.getCurrentCondition.Visibility.Metric;

  const modalMessage = {
    title: '가시거리',
    가시거리에_관하여:
      '가시거리는 건물이나 언덕과 같은 사물을 얼마나 멀리까지 볼 수 있는지를 말합니다. 이는 공기의 투명도를 측정하는 것으로 햇빛의 양이나 장애물의 존재를 고려하지는 않습니다. 가시거리가 10Km 이상이면 좋은 것으로 간주합니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item" onClick={handleModal}>
        <div className="grid-title">
          <IoEyeSharp className="mr-1" size={15} />
          가시거리
        </div>
        <span className="text-3xl">
          {visibility}
          {Unit}
        </span>

        <ModalContainer
          isModalOpen={isModalOpen}
          modalMessage={modalMessage}
          handleModal={handleModal}
        />
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

export default Visibility_GridItem;
