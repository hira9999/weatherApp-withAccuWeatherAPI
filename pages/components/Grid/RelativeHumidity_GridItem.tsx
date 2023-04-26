import React, { useState } from 'react';
import { CurrentConditionData } from '../../../graphql/types/queryDatatypes';
import { WiHumidity } from 'react-icons/wi';
import Modal from '../Common/Modal';

interface RelativeHumidity_GridItemProps {
  currentConditionData: CurrentConditionData;
}

const RelativeHumidity_GridItem = ({
  currentConditionData,
}: RelativeHumidity_GridItemProps) => {
  const modalMessage = {
    title: '습도',
    상새_습도에_관하여:
      '일반적으로 습도라고 알려진 상대 습도는 공기가 최대로 포함할 수 있는 수증기량과 실제 공기 중의 수증기량을 비교한 값입니다. 공기는 기온이 높을수록 더 많은 수증기를 함유할 수 있습니다. 상대 습도가 100%에 가깝다는 것은 이슬이나 안개가 있을 수 있음을 의미합니다.',
    이슬점에_관하여:
      '이슬점은 기온이 내려가면서 이슬이 맺히는 온도입니다. 이는 공기가 얼마나 습한지를 알 수 있는 유용한 지표가 될 수 있습니다. 이슬점이 높을수록 공기가 더 습하게 느껴집니다. 이슬점이 현재 온도와 일치하면 상대 습도가 100%임을 의미하며 이슬이나 안개가 있을 수 있습니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item" onClick={handleModal}>
        <div className="grid-title">
          <WiHumidity className="" size={15} />
          습도
        </div>
        <span className="text-3xl">
          {currentConditionData.getCurrentCondition.RelativeHumidity}%
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

export default RelativeHumidity_GridItem;
