import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Region {
    ID: String
    LocalizedName: String
    EnglishName: String
  }

  type Country {
    ID: String
    LocalizedName: String
    EnglishName: String
  }

  type AdministrativeArea {
    ID: String
    LocalizedName: String
    EnglishName: String
    Level: Int
    LocalizedType: String
    EnglishType: String
    CountryID: String
  }

  type MetricValue {
    Value: Float
    Unit: String
    UnitType: Int
  }

  type ImperialValue {
    Value: Float
    Unit: String
    UnitType: Int
  }

  type Elevation {
    Metric: MetricValue
    Imperial: ImperialValue
  }

  type GeoPosition {
    Latitude: Float
    Longitude: Float
    Elevation: Elevation
  }
  type TimeZone {
    Code: String
    Name: String
    GmtOffset: Float
    IsDaylightSaving: Boolean
    NextOffsetChange: String
  }
  type Source {
    DataType: String
    Source: String
    SourceId: Int
  }
  type Details {
    Key: String
    StationCode: String
    StationGmtOffset: Float
    BandMap: String
    Climo: String
    LocalRadar: String
    MediaRegion: String
    Metar: String
    NXMetro: String
    NXState: String
    Population: Int
    PrimaryWarningCountyCode: String
    PrimaryWarningZoneCode: String
    Satellite: String
    Synoptic: String
    MarineStation: String
    MarineStationGMTOffset: Float
    VideoCode: String
    LocationStem: String
    PartnerID: Int
    Sources: [Source]
    CanonicalPostalCode: String
    CanonicalLocationKey: String
  }

  type Location {
    id: String
    Version: Int
    Key: String
    Type: String
    Rank: Int
    LocalizedName: String
    EnglishName: String
    PrimaryPostalCode: String
    Region: Region
    Country: Country
    AdministrativeArea: AdministrativeArea
    TimeZone: TimeZone
    GeoPosition: GeoPosition
    IsAlias: Boolean
    SupplementalAdminAreas: [String]
    DataSets: [String]
    Details: Details
    CanonicalPostalCode: String
    CanonicalLocationKey: String
  }

  type Metric {
    Value: Float
    Unit: String
    UnitType: Int
    Phrase: String
  }

  type Imperial {
    Value: Float
    Unit: String
    UnitType: Int
    Phrase: String
  }

  type Values {
    Metric: Metric
    Imperial: Imperial
  }

  type PressureTendency {
    LocalizedText: String
    Code: String
  }

  type PrecipitationSummary {
    Precipitation: Values
    PastHour: Values
    Past3Hours: Values
    Past6Hours: Values
    Past9Hours: Values
    Past12Hours: Values
    Past18Hours: Values
    Past24Hours: Values
  }

  type PastXHourRange {
    Minimum: Values
    Maximum: Values
  }

  type TemperatureSummary {
    Past6HourRange: PastXHourRange
    Past12HourRange: PastXHourRange
    Past24HourRange: PastXHourRange
  }

  type WindGust {
    Speed: Values
  }
  type Wind {
    Direction: Direction
    Speed: Values
  }
  type Direction {
    Degrees: Int
    Localized: String
    English: String
  }

  type Headline {
    EffectiveDate: String
    EffectiveEpochDate: Int
    Severity: Int
    Text: String
    Category: String
    EndDate: String
    EndEpochDate: Int
    MobileLink: String
    Link: String
  }

  type Sun {
    Rise: String
    EpochRise: Int
    Set: String
    EpochSet: Int
  }
  type Moon {
    Rise: String
    EpochRise: Int
    Set: String
    EpochSet: Int
    Phase: String
    Age: Int
  }

  type Temperature {
    Minimum: Metric
    Maximum: Metric
  }
  type DegreeDaySummary {
    Heating: Metric
    Cooling: Metric
  }
  type AirAndPollen {
    Name: String
    Value: Int
    Category: String
    CategoryValue: Int
    Type: String
  }
  type Day {
    Icon: Int
    IconPhrase: String
    HasPrecipitation: Boolean
    PrecipitationType: String
    PrecipitationIntensity: String
    ShortPhrase: String
    LongPhrase: String
    PrecipitationProbability: Int
    ThunderstormProbability: Int
    RainProbability: Int
    SnowProbability: Int
    IceProbability: Int
    Wind: Wind
    WindGust: Wind
    TotalLiquid: Values
    Rain: Values
    Snow: Values
    Ice: Values
    HoursOfPrecipitation: Float
    HoursOfRain: Float
    HoursOfSnow: Float
    HoursOfIce: Float
    CloudCover: Int
    Evapotranspiration: Values
    SolarIrradiance: Values
  }

  type DailyForecast {
    Date: String
    EpochDate: Int
    Sun: Sun
    Moon: Moon
    HoursOfSun: Float
    Temperature: Temperature
    RealFeelTemperature: Temperature
    RealFeelTemperatureShade: Temperature
    DegreeDaySummary: DegreeDaySummary
    AirAndPollen: [AirAndPollen]
    Day: Day
    Night: Day
    Sources: [String]
    MobileLink: String
    Link: String
  }

  type HoursFcst {
    DateTime: String
    EpochDateTime: Int
    WeatherIcon: Int
    IconPhrase: String
    HasPrecipitation: Boolean
    PrecipitationType: String
    PrecipitationIntensity: String
    IsDaylight: Boolean
    Temperature: Metric
    RealFeelTemperature: Metric
    RealFeelTemperatureShade: Metric
    WetBulbTemperature: Metric
    DewPoint: Metric
    Wind: Wind
    WindGust: WindGust
    RelativeHumidity: Int
    IndoorRelativeHumidity: Int
    Visibility: Metric
    Ceiling: Metric
    UVIndex: Int
    UVIndexText: String
    PrecipitationProbability: Int
    ThunderstormProbability: Int
    RainProbability: Int
    SnowProbability: Int
    IceProbability: Int
    TotalLiquid: Metric
    Rain: Metric
    Snow: Metric
    Ice: Metric
    CloudCover: Int
    Evapotranspiration: Metric
    SolarIrradiance: Metric
    MobileLink: String
    Link: String
  }

  type FiveDaysFcst {
    locationKey: String!
    Headline: Headline
    DailyForecasts: [DailyForecast!]!
  }

  type TwelveHoursFcst {
    locationKey: String!
    HoursFcsts: [HoursFcst!]!
  }

  type CurrentConditions {
    locationKey: String!
    LocalObservationDateTime: String
    EpochTime: Int
    WeatherText: String
    WeatherIcon: Int
    HasPrecipitation: Boolean
    PrecipitationType: String
    IsDayTime: Boolean
    Temperature: Values
    RealFeelTemperature: Values
    RealFeelTemperatureShade: Values
    RelativeHumidity: Int
    IndoorRelativeHumidity: Boolean
    DewPoint: Values
    Pressure: Values
    Past24HourTemperatureDeparture: Values
    ApparentTemperature: Values
    WindChillTemperature: Values
    WetBulbTemperature: Values
    Precip1hr: Values
    PressureTendency: PressureTendency
    PrecipitationSummary: PrecipitationSummary
    TemperatureSummary: TemperatureSummary
    Wind: Wind
    WindGust: WindGust
    UVIndex: Int
    UVIndexText: String
    Visibility: Values
    ObstructionsToVisibility: String
    CloudCover: Int
    Ceiling: Values
    MobileLink: String
    Link: String
  }
  type KhaiValue {
    khaiValue: String
  }

  type CtprvnRltmMesureDnsty {
    khaiValues: [KhaiValue!]!
    sidoName: String!
    locationKey: String!
  }

  input LatLngInput {
    lat: Float!
    lng: Float!
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type Query {
    getLocation(latLng: LatLngInput!): Location!
    getCurrentCondition(locationKey: String!): CurrentConditions!
    getFiveDaysFcst(locationKey: String!): FiveDaysFcst!
    getTwelveHoursFcst(locationKey: String!): TwelveHoursFcst!
    getCtprvnRltmMesureDnsty(
      sidoName: String!
      locationKey: String!
    ): CtprvnRltmMesureDnsty!
  }
`;
