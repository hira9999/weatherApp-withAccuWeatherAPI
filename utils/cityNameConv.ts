const cityNameConv = (cityName: string) => {
  return cityName.includes('광역시') ||
    cityName.includes('특별') ||
    cityName.length == 3
    ? cityName.slice(0, 2)
    : cityName.charAt(0) + cityName.charAt(3);
};

export default cityNameConv;
