import { gql } from 'graphql-tag';

const GEOPOSITION_SEARCH_QUERY = gql`
  query GEOPOSITION_SEARCH_QUERY($latLng: LatLngInput!) {
    getLocation(latLng: $latLng) {
      Key
      LocalizedName
      id
      AdministrativeArea {
        LocalizedName
      }
    }
  }
`;

const CURRENTCONDITIONS_QUERY = gql`
  query CURRENTCONDITIONS_QUERY($locationKey: String!) {
    getCurrentCondition(locationKey: $locationKey) {
      LocalObservationDateTime
      WeatherIcon
      locationKey
      PrecipitationSummary {
        PastHour {
          Metric {
            Value
            Unit
            UnitType
          }
        }
        Past3Hours {
          Metric {
            Value
            Unit
            UnitType
          }
        }
        Past6Hours {
          Metric {
            Value
            Unit
            UnitType
          }
        }
        Past9Hours {
          Metric {
            Value
            Unit
            UnitType
          }
        }
        Past12Hours {
          Metric {
            Value
            Unit
            UnitType
          }
        }
        Past18Hours {
          Metric {
            Value
            Unit
            UnitType
          }
        }
        Past24Hours {
          Metric {
            Value
            Unit
            UnitType
          }
        }
      }
      DewPoint {
        Metric {
          Phrase
          Unit
          UnitType
          Value
        }
      }
      Wind {
        Direction {
          Degrees
          English
          Localized
        }
        Speed {
          Metric {
            Phrase
            Unit
            UnitType
            Value
          }
        }
      }
      Temperature {
        Metric {
          Value
          UnitType
          Unit
          Phrase
        }
      }
      IsDayTime
      UVIndex
      UVIndexText
      WeatherText
      CloudCover
      RealFeelTemperature {
        Metric {
          Phrase
          Unit
          UnitType
          Value
        }
      }
      IndoorRelativeHumidity
      RelativeHumidity
      Visibility {
        Metric {
          Value
          UnitType
          Phrase
          Unit
        }
      }
      Ceiling {
        Metric {
          Value
          UnitType
          Unit
          Phrase
        }
      }
      Pressure {
        Metric {
          Value
          UnitType
          Unit
          Phrase
        }
      }
      ApparentTemperature {
        Metric {
          Value
          UnitType
          Unit
          Phrase
        }
      }
      PrecipitationType
    }
  }
`;

const FIVEDAYS_FCST_QUERY = gql`
  query FIVEDAYS_FCST_QUERY($locationKey: String!) {
    getFiveDaysFcst(locationKey: $locationKey) {
      locationKey
      Headline {
        Category
        Text
        EndDate
        EffectiveDate
      }
      DailyForecasts {
        Date
        Temperature {
          Maximum {
            Phrase
            Unit
            UnitType
            Value
          }
          Minimum {
            Value
            UnitType
            Unit
            Phrase
          }
        }
        Day {
          Icon
          IconPhrase
          HasPrecipitation
          PrecipitationType
          PrecipitationProbability
          CloudCover
          ThunderstormProbability
          RainProbability
          SnowProbability
          IceProbability
        }
        Night {
          Icon
          IconPhrase
          HasPrecipitation
          PrecipitationType
          PrecipitationProbability
          CloudCover
          ThunderstormProbability
          RainProbability
          SnowProbability
          IceProbability
        }
        Sun {
          Rise
          Set
        }
      }
    }
  }
`;

const TWELVEHOURS_FCST_QUERY = gql`
  query TWELVEHOURS_FCST_QUERY($locationKey: String!) {
    getTwelveHoursFcst(locationKey: $locationKey) {
      locationKey
      HoursFcsts {
        WeatherIcon
        DateTime
        IsDaylight
        CloudCover
        UVIndex
        UVIndexText
        PrecipitationProbability
        ThunderstormProbability
        HasPrecipitation
        RainProbability
        SnowProbability
        IceProbability
        PrecipitationType
        Temperature {
          Phrase
          Unit
          UnitType
          Value
        }
      }
    }
  }
`;

const AIR_QUALITY_KHAIVALUES_QUERY = gql`
  query AIR_QUALITY_KHAIVALUES_QUERY(
    $sidoName: String!
    $locationKey: String!
  ) {
    getCtprvnRltmMesureDnsty(sidoName: $sidoName, locationKey: $locationKey) {
      khaiValues {
        khaiValue
      }
      locationKey
      sidoName
    }
  }
`;

export {
  GEOPOSITION_SEARCH_QUERY,
  CURRENTCONDITIONS_QUERY,
  FIVEDAYS_FCST_QUERY,
  TWELVEHOURS_FCST_QUERY,
  AIR_QUALITY_KHAIVALUES_QUERY,
};
