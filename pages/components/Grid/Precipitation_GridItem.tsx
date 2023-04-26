import React, { useState } from 'react';

import {
  CurrentConditionData,
  PrecipitationSummary,
} from '../../../types/queryDatatype';
import { GiWaterDrop } from 'react-icons/gi';
import Modal from '../Common/Modal';
interface Precipitation_GridItemProps {
  currentConditionData: CurrentConditionData;
}
const Precipitation_GridItem = ({
  currentConditionData,
}: Precipitation_GridItemProps) => {
  const summary = currentConditionData.getCurrentCondition.PrecipitationSummary;

  const getMaxPrecipitationPastHour = (precipitation: PrecipitationSummary) => {
    let maxMetricValue = -Infinity;
    let maxPastHour;

    for (const [key, value] of Object.entries(precipitation)) {
      if (key.startsWith('Past') && value.Metric.Value > maxMetricValue) {
        maxMetricValue = value.Metric.Value;
        maxPastHour = {
          value,
          key: '지난 ' + Number(key.replace(/[^0-9]/g, '')) + '시간',
        };
      }
    }

    return maxPastHour;
  };

  const maxPrecipitationPastHour = getMaxPrecipitationPastHour(summary);

  const modalMessage = {
    title: '강수량',
    일간요약: '',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="grid-item" onClick={handleModal}>
        <div className="grid-title">
          <GiWaterDrop className="mr-0.5" size={12} />
          강수량
        </div>
        <div className="flex flex-col">
          <span className="text-3xl">
            {Math.round(maxPrecipitationPastHour?.value.Metric.Value)}mm
          </span>
          <span className="text-lg">{maxPrecipitationPastHour?.key}</span>
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

export default Precipitation_GridItem;
