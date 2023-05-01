import React, { useState } from 'react';
import { WiDust } from 'react-icons/wi';
import getAirQualityStatus from '../../../utils/getAirQualityStatus';
import ModalContainer from '../../Common/ModalContainer';

interface AirQuality_GridItem_Props {
  CIAaverage: number;
}

const AirQuality_GridItem = ({ CIAaverage }: AirQuality_GridItem_Props) => {
  const modalContent = {
    title: '대기질',
    건강_정보:
      '급성 노출 시 어린이, 노인 및 대기오염 관련 질환자군 등 민감군에게 심가가한 영향을 미칠 수 있는 수준.',
    주요_오염_물질:
      '미세먼지(PM10)는 흡입될 정도로 작으며 일반적으로 건설,농업, 사막의 먼지 또는 꽃가루에 의해 발생합니다.',
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className="col-span-2 grid-item justify-between p-2"
        onClick={handleModal}
      >
        <div>
          <div className="grid-title">
            <WiDust className="mr-0.5" size={15} />
            대기질 지수
          </div>
          <div className="text-xl">
            <span className="font-bold">{CIAaverage}-</span>
            <span className="font-bold text-medium">
              {getAirQualityStatus(CIAaverage)}
            </span>
          </div>
        </div>
        <input type="range" min={0} max={300} value={CIAaverage} readOnly />

        <ModalContainer
          isModalOpen={isModalOpen}
          modalContent={modalContent}
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

export default AirQuality_GridItem;
