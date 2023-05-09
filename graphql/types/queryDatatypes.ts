export interface LatLng {
  latLng: {
    lat: number;
    lng: number;
  };
}
export interface LocationKey {
  locationKey: string;
}

interface AdministrativeArea {
  LocalizedName: string;
}

export interface Location {
  getLocation: {
    Key: string;
    LocalizedName: string;
    id: string;
    AdministrativeArea: AdministrativeArea;
  };
}

export interface AirQualityVariables {
  locationKey: string;
  sidoName: string;
}

interface Metric {
  Metric: {
    Value: number;
    UnitType: number;
    Unit: string;
    Phase?: string;
  };
}

interface Wind {
  Direction: {
    Degrees: number;
    English: string;
  };
  Speed: Metric;
}

interface Headline {
  Category: string;
  Text: string;
  EndDate: string;
  EffectiveDate: string;
}

interface MetricValue {
  Value: number;
  UnitType: number;
  Unit: string;
  Phase?: string;
}

interface Temperature {
  Maximum: MetricValue;
  Minimum: MetricValue;
}

interface DayNight {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationProbability: number;
  CloudCover: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
}
interface Sun {
  Rise: string;
  Set: string;
}

interface DailyForecasts {
  Date: string;
  Temperature: Temperature;
  Day: DayNight;
  Night: DayNight;
  Sun: Sun;
}

interface HoursFcst {
  DateTime: string;
  WeatherIcon: number;
  UVIndex: number;
  UVIndexText: string;
  IsDaylight: boolean;
  CloudCover: number;
  PrecipitationProbability: number;
  RainProbability: number;
  SnowProbability: number;
  ThunderstormProbability: number;
  IceProbability: number;
  PrecipitationType: string;
  Temperature: MetricValue;
  HasPrecipitation: boolean;
}

export interface KhaiValue {
  khaiValue: string;
}

export interface PrecipitationSummary {
  PastHour: Metric;
  Past3Hours: Metric;
  Past6Hours: Metric;
  Past9Hours: Metric;
  Past12Hours: Metric;
  Past18Hours: Metric;
  Past24Hours: Metric;
}

export interface GetCurrentCondition {
  LocalObservationDateTime: string;
  WeatherIcon: number;
  PrecipitationType: string;
  Pressure: Metric;
  ApparentTemperature: Metric;
  Ceiling: Metric;
  Visibility: Metric;
  RelativeHumidity: number;
  IndoorRelativeHumidity: number;
  RealFeelTemperature: Metric;
  IsDayTime: boolean;
  UVIndex: number;
  UVIndexText: string;
  WeatherText: string;
  CloudCover: number;
  Temperature: Metric;
  DewPoint: Metric;
  Wind: Wind;
  PrecipitationSummary: PrecipitationSummary;
}

export interface CurrentConditionData {
  getCurrentCondition: GetCurrentCondition;
}

export interface GetFiveDaysFcst {
  Headline: Headline;
  DailyForecasts: DailyForecasts[];
  locationKey: string;
}
export interface FivedaysFcstData {
  getFiveDaysFcst: GetFiveDaysFcst;
}

export interface TwelveHoursFcstData {
  getTwelveHoursFcst: { id: string; HoursFcsts: HoursFcst[] };
}

export interface KhaiValueData {
  getCtprvnRltmMesureDnsty: {
    sidoName: string;
    locationKey: string;
    khaiValues: KhaiValue[];
  };
}
