import { FivedaysFcstData } from '../types/queryDatatype';

function getFivdaysMinMaxTemp(fivedaysFcstData: FivedaysFcstData) {
  const minimumTempArr = fivedaysFcstData.getFiveDaysFcst.DailyForecasts.map(
    (v, i) => v.Temperature.Minimum.Value
  );

  const maximumTempArr = fivedaysFcstData.getFiveDaysFcst.DailyForecasts.map(
    (v) => v.Temperature.Maximum.Value
  );

  const tempMin = Math.min(...minimumTempArr);
  const tempMax = Math.max(...maximumTempArr);

  return { tempMin, tempMax };
}

export default getFivdaysMinMaxTemp;
