interface Region {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

interface Country {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
}

interface AdministrativeArea {
  ID: string;
  LocalizedName: string;
  EnglishName: string;
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

interface MetricValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface ImperialValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Elevation {
  Metric: MetricValue;
  Imperial: ImperialValue;
}

interface GeoPosition {
  Latitude: number;
  Longitude: number;
  Elevation: Elevation;
}

interface TimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange: null;
}

interface Source {
  DataType: string;
  Source: string;
  SourceId: number;
}

interface Details {
  Key: string;
  StationCode: string;
  StationGmtOffset: number;
  BandMap: string;
  Climo: string;
  LocalRadar: string;
  MediaRegion: null;
  Metar: string;
  NXMetro: string;
  NXState: string;
  Population: number;
  PrimaryWarningCountyCode: string;
  PrimaryWarningZoneCode: string;
  Satellite: string;
  Synoptic: string;
  MarineStation: string;
  MarineStationGMTOffset: null;
  VideoCode: string;
  LocationStem: string;
  PartnerID: null;
  Sources: Source[];
  CanonicalPostalCode: string;
  CanonicalLocationKey: string;
}

interface Location {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: Region;
  Country: Country;
  AdministrativeArea: AdministrativeArea;
  TimeZone: TimeZone;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  SupplementalAdminAreas: any[];
  DataSets: string[];
  Details: Details;
}
