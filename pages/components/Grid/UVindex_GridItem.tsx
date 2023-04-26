import React, { useState } from 'react';
import { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { BsFillSunFill } from 'react-icons/bs';
import Modal from '../Common/Modal';

interface UVindex_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const UVindex_GridItem = ({ currentConditionData }: UVindex_GridItemProps) => {
  const { UVIndex } = currentConditionData.getCurrentCondition;

  const modalMessage = {
    title: '자외선 지수',
    자외선_지수에_관하여:
      '세계보건기구의 자외선 지수(UVI)는 자외선을 측정합니다. UVI가 높을수록 손상을 입을 가능성이 커지며 더 빠른 속도로 진행될 숭 있습니다. UVI는 태양으로부터 언제 자신을 보호해야 하고 언제 외부에 있는 것을 피해야 하는지를 결정하는 데 도움을 줄 수 있습니다. 세계보건기구는 자외선 지수가 3 이상일 때 그늘막, 자외선 차단제, 모자, 보호복을 사용할 것을 권고합니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item justify-between" onClick={handleModal}>
        <div className="flex flex-col">
          <div className="grid-title">
            <BsFillSunFill className="mr-1" size={12} />
            자외선 지수
          </div>
          <span className=" text-3xl">{UVIndex}</span>
          <span className="text-xl">
            {currentConditionData.getCurrentCondition.UVIndexText}
          </span>
        </div>
        <input type="range" min={0} max={11} value={UVIndex} readOnly />
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

export default UVindex_GridItem;
