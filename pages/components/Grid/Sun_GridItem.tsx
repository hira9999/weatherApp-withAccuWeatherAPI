import React, { useState } from 'react';
import {
  CurrentConditionData,
  FivedaysFcstData,
} from '../../../graphql/types/queryDatatypes';
import { BsSunsetFill, BsSunriseFill } from 'react-icons/bs';
import timeConv from '../../../utils/timeConv';
import Modal from '../Common/Modal';

interface Sun_GridItemProps {
  currentConditionData: CurrentConditionData;
  fivedaysFcstData: FivedaysFcstData;
}
const Sun_GridItem = ({
  currentConditionData,
  fivedaysFcstData,
}: Sun_GridItemProps) => {
  const { IsDayTime } = currentConditionData.getCurrentCondition;
  const sunriseTime = timeConv(
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Sun.Rise,
    true
  );
  const sunsetTime = timeConv(
    fivedaysFcstData.getFiveDaysFcst.DailyForecasts[0].Sun.Set,
    true
  );

  const modalMessage = {
    주요오염물질:
      '미세먼지는 흡힙될 정도로 작으며 일반적으로 건설, 농업, 사막의 먼지 또는 꽃가루에 의해 발생합니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item h-[150px]" onClick={handleModal}>
        {IsDayTime ? (
          <>
            <div className="grid-title">
              <BsSunsetFill className="mr-0.5" size={15} />
              일몰
            </div>
            <span className="text-2xl">{sunsetTime}</span>
          </>
        ) : (
          <>
            <div className="grid-title">
              <BsSunriseFill className="mr-0.5" size={15} />
              일출
            </div>
            <span className="text-2xl">{sunriseTime}</span>
          </>
        )}
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

export default Sun_GridItem;
