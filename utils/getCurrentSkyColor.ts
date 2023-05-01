import type {
  GetCurrentCondition,
  GetFiveDaysFcst,
} from '../graphql/types/queryDatatypes';

const daytimeColor = {
  dawn: 'to bottom, #1B2A4A, #7D6180',
  night: 'to bottom, #05051C, #334461',
  day: 'to bottom, #094F91, #ABC9E8',
  rain: 'to bottom, #485767, #485667',
};

const getCurrentSkyColor = (
  getCurrentCondition?: GetCurrentCondition,
  getFiveDaysFcst?: GetFiveDaysFcst
) => {
  const isDayTime = getCurrentCondition?.IsDayTime;
  const now = new Date().getTime();
  const sunriseTime = new Date(
    getFiveDaysFcst?.DailyForecasts[0].Sun.Rise || 0
  ).getTime();
  const sunsetTime = new Date(
    getFiveDaysFcst?.DailyForecasts[0].Sun.Set || 0
  ).getTime();

  if (
    getCurrentCondition?.PrecipitationSummary.Past3Hours.Metric.Value ||
    0 >= 1
  ) {
    return daytimeColor['rain'];
  }
  // 현재시간으로부터 일몰이 30분전부터 'dawn'을 출력
  if (isDayTime && sunsetTime - now >= 1000 * 60 * 30) {
    return daytimeColor['dawn'];
  }

  if (!isDayTime && sunriseTime - now >= 1000 * 60 * 30) {
    return daytimeColor['dawn'];
  }

  if (isDayTime) {
    return daytimeColor['day'];
  } else {
    return daytimeColor['night'];
  }
};

export default getCurrentSkyColor;
