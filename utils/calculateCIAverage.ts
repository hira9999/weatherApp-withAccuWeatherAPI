import type { KhaiValue } from '../graphql/types/queryDatatypes';

const calculateCIAverage = (khaiValues?: KhaiValue[]) => {
  if (!khaiValues) return undefined;
  const khaiValueArr = khaiValues
    .filter(({ khaiValue }) => !isNaN(+khaiValue))
    .map(({ khaiValue }) => +khaiValue);

  const averageCIA = Math.round(
    khaiValueArr.reduce((acc: number, cur: number) => acc + cur, 0) /
      khaiValueArr.length
  );

  return averageCIA;
};

export default calculateCIAverage;
