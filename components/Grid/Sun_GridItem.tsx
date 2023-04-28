import React, { useState } from 'react';
import type {
  CurrentConditionData,
  FivedaysFcstData,
} from '../../graphql/types/queryDatatypes';
import { BsSunsetFill, BsSunriseFill } from 'react-icons/bs';
import timeConv from '../../utils/timeConv';
import ModalContainer from '../Common/ModalContainer';

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
    title: IsDayTime ? '일몰' : '일출',
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

export default Sun_GridItem;
