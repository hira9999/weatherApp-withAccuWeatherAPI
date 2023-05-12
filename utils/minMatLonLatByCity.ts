const minMaxLonLatByCity: {
  [key: string]: {
    lat: { min: number; max: number };
    lng: { min: number; max: number };
  };
} = {
  서울특별시: {
    lat: { min: 37.413294, max: 37.701749 },
    lng: { min: 126.764302, max: 127.182041 },
  },
  부산광역시: {
    lat: { min: 35.05194, max: 35.40806 },
    lng: { min: 128.8031, max: 129.2922 },
  },
  대구광역시: {
    lat: { min: 35.858157, max: 36.186645 },
    lng: { min: 128.396102, max: 128.746105 },
  },
  인천광역시: {
    lat: { min: 37.26667, max: 37.80389 },
    lng: { min: 126.38, max: 126.8208 },
  },
  광주광역시: {
    lat: { min: 35.03361, max: 35.32028 },
    lng: { min: 126.6447, max: 126.9747 },
  },
  대전광역시: {
    lat: { min: 36.17694, max: 36.47944 },
    lng: { min: 127.2422, max: 127.4528 },
  },
  울산광역시: {
    lat: { min: 35.48722, max: 35.65306 },
    lng: { min: 129.2072, max: 129.4272 },
  },
  세종특별자치시: {
    lat: { min: 36.35, max: 36.61472 },
    lng: { min: 127.2139, max: 127.5108 },
  },
  경기도: {
    lat: { min: 36.78444, max: 38.22306 },
    lng: { min: 126.6269, max: 128.62 },
  },
  강원도: {
    lat: { min: 36.15861, max: 38.25139 },
    lng: { min: 127.617, max: 130.930388 },
  },
  충청북도: {
    lng: { min: 126.561567, max: 128.304931 },
    lat: { min: 36.07713, max: 37.538837 },
  },
  충청남도: {
    lng: { min: 126.443459, max: 127.946144 },
    lat: { min: 35.006353, max: 36.854037 },
  },
  전라북도: {
    lng: { min: 125.675566, max: 128.201954 },
    lat: { min: 34.71562, max: 36.891707 },
  },
  전라남도: {
    lng: { min: 125.842598, max: 128.167309 },
    lat: { min: 33.129879, max: 35.582407 },
  },
  경상북도: {
    lng: { min: 127.626509, max: 131.084118 },
    lat: { min: 35.05105, max: 38.450828 },
  },
  경상남도: {
    lng: { min: 127.686761, max: 129.506913 },
    lat: { min: 34.390654, max: 36.915831 },
  },
  제주특별자치도: {
    lng: { min: 124.71109, max: 126.852528 },
    lat: { min: 33.004047, max: 34.61185 },
  },
};

const getCityByLonLat = (lat: number | string, lng: number | string) => {
  for (const cityName in minMaxLonLatByCity) {
    const city = minMaxLonLatByCity[cityName];
    if (
      +lat >= city.lat.min &&
      +lat <= city.lat.max &&
      +lng >= city.lng.min &&
      +lng <= city.lng.max
    ) {
      return cityName.includes('광역시') ||
        cityName.includes('특별') ||
        cityName.length == 3
        ? cityName.slice(0, 2)
        : cityName.charAt(0) + cityName.charAt(3);
    }
  }
  return '서울';
};

export default getCityByLonLat;
