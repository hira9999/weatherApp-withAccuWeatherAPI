function getAirQualityStatus(cia: number) {
  switch (true) {
    case cia >= 0 && cia <= 50:
      return '좋음';
    case cia >= 51 && cia <= 100:
      return '보통';
    case cia >= 101 && cia <= 250:
      return '나쁨';
    case cia >= 251:
      return '매우 나쁨';
    default:
      return '--';
  }
}

export default getAirQualityStatus;
