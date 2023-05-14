const days = {
  Headline: {
    EffectiveDate: '2023-04-14T19:00:00+09:00',
    EffectiveEpochDate: 1681466400,
    Severity: 2,
    Text: '금요일 저녁부터 토요일 아침까지 비가 내릴 예정',
    Category: 'rain',
    EndDate: '2023-04-15T13:00:00+09:00',
    EndEpochDate: 1681531200,
    MobileLink:
      'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?unit=c',
    Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?unit=c',
  },
  DailyForecasts: [
    {
      Date: '2023-04-11T07:00:00+09:00',
      EpochDate: 1681164000,
      Sun: {
        Rise: '2023-04-11T05:59:00+09:00',
        EpochRise: 1681160340,
        Set: '2023-04-11T18:55:00+09:00',
        EpochSet: 1681206900,
      },
      Moon: {
        Rise: null,
        EpochRise: null,
        Set: '2023-04-11T08:58:00+09:00',
        EpochSet: 1681171080,
        Phase: 'WaningGibbous',
        Age: 20,
      },
      Temperature: {
        Minimum: {
          Value: 5.4,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 23.6,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 5.9,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쌀쌀함',
        },
        Maximum: {
          Value: 22.6,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 5.9,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쌀쌀함',
        },
        Maximum: {
          Value: 20,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      HoursOfSun: 4.3,
      DegreeDaySummary: {
        Heating: {
          Value: 4,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
          Type: '오존',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 4,
          Category: '보통',
          CategoryValue: 2,
        },
      ],
      Day: {
        Icon: 12,
        IconPhrase: '소나기',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: '흐리고 오후에 소나기가 내림',
        LongPhrase: '흐리고 오후에 소나기가 내림',
        PrecipitationProbability: 70,
        ThunderstormProbability: 14,
        RainProbability: 70,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 244,
            Localized: '서남서',
            English: 'WSW',
          },
        },
        WindGust: {
          Speed: {
            Value: 51.9,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 257,
            Localized: '서남서',
            English: 'WSW',
          },
        },
        TotalLiquid: {
          Value: 1.5,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 1.5,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 1.5,
        HoursOfRain: 1.5,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 77,
        Evapotranspiration: {
          Value: 2.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 3423.7,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 36,
        IconPhrase: '간헐적으로 흐림',
        HasPrecipitation: false,
        ShortPhrase: '약간 흐림',
        LongPhrase: '약간 흐림',
        PrecipitationProbability: 4,
        ThunderstormProbability: 0,
        RainProbability: 4,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.6,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 309,
            Localized: '북서',
            English: 'NW',
          },
        },
        WindGust: {
          Speed: {
            Value: 27.8,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 255,
            Localized: '서남서',
            English: 'WSW',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 57,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 58.6,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=1&unit=c',
      Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=1&unit=c',
    },
    {
      Date: '2023-04-12T07:00:00+09:00',
      EpochDate: 1681250400,
      Sun: {
        Rise: '2023-04-12T05:58:00+09:00',
        EpochRise: 1681246680,
        Set: '2023-04-12T18:56:00+09:00',
        EpochSet: 1681293360,
      },
      Moon: {
        Rise: '2023-04-12T00:32:00+09:00',
        EpochRise: 1681227120,
        Set: '2023-04-12T09:54:00+09:00',
        EpochSet: 1681260840,
        Phase: 'WaningGibbous',
        Age: 21,
      },
      Temperature: {
        Minimum: {
          Value: 2.7,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 20.6,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 3.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쌀쌀함',
        },
        Maximum: {
          Value: 22.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 3.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: '추움',
        },
        Maximum: {
          Value: 18.6,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      HoursOfSun: 7.6,
      DegreeDaySummary: {
        Heating: {
          Value: 6,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
          Type: '오존',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 8,
          Category: '건강에 해로움',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 3,
        IconPhrase: '일부 화창',
        HasPrecipitation: false,
        ShortPhrase: '약간 흐리고 쾌적함',
        LongPhrase: '약간 흐리고 쾌적함',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 14.8,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 290,
            Localized: '서북서',
            English: 'WNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 48.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 279,
            Localized: '서',
            English: 'W',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 4.1,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5539.6,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 33,
        IconPhrase: '맑음',
        HasPrecipitation: false,
        ShortPhrase: '맑음',
        LongPhrase: '맑음',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 295,
            Localized: '서북서',
            English: 'WNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 33.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 288,
            Localized: '서북서',
            English: 'WNW',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 7,
        Evapotranspiration: {
          Value: 0.8,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 107.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=2&unit=c',
      Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=2&unit=c',
    },
    {
      Date: '2023-04-13T07:00:00+09:00',
      EpochDate: 1681336800,
      Sun: {
        Rise: '2023-04-13T05:57:00+09:00',
        EpochRise: 1681333020,
        Set: '2023-04-13T18:57:00+09:00',
        EpochSet: 1681379820,
      },
      Moon: {
        Rise: '2023-04-13T01:34:00+09:00',
        EpochRise: 1681317240,
        Set: '2023-04-13T10:59:00+09:00',
        EpochSet: 1681351140,
        Phase: 'Last',
        Age: 22,
      },
      Temperature: {
        Minimum: {
          Value: 7.7,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 25,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 9.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쌀쌀함',
        },
        Maximum: {
          Value: 26.5,
          Unit: 'C',
          UnitType: 17,
          Phrase: '매우 따뜻함',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 9.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쌀쌀함',
        },
        Maximum: {
          Value: 23.9,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      HoursOfSun: 4.5,
      DegreeDaySummary: {
        Heating: {
          Value: 2,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
          Type: '오존',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 7,
          Category: '해로움 (민감 그룹)',
          CategoryValue: 3,
        },
      ],
      Day: {
        Icon: 4,
        IconPhrase: '간헐적으로 흐림',
        HasPrecipitation: false,
        ShortPhrase: '약간 흐리고 따뜻함',
        LongPhrase: '약간 흐리고 따뜻함',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.6,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 242,
            Localized: '서남서',
            English: 'WSW',
          },
        },
        WindGust: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 242,
            Localized: '서남서',
            English: 'WSW',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 70,
        Evapotranspiration: {
          Value: 3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 4275.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: '약간 흐림',
        HasPrecipitation: false,
        ShortPhrase: '약간 흐림',
        LongPhrase: '약간 흐림',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 3.7,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 168,
            Localized: '남남동',
            English: 'SSE',
          },
        },
        WindGust: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 188,
            Localized: '남',
            English: 'S',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 99,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 43.3,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=3&unit=c',
      Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=3&unit=c',
    },
    {
      Date: '2023-04-14T07:00:00+09:00',
      EpochDate: 1681423200,
      Sun: {
        Rise: '2023-04-14T05:55:00+09:00',
        EpochRise: 1681419300,
        Set: '2023-04-14T18:58:00+09:00',
        EpochSet: 1681466280,
      },
      Moon: {
        Rise: '2023-04-14T02:26:00+09:00',
        EpochRise: 1681406760,
        Set: '2023-04-14T12:10:00+09:00',
        EpochSet: 1681441800,
        Phase: 'WaningCrescent',
        Age: 23,
      },
      Temperature: {
        Minimum: {
          Value: 13,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 22.2,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 11.1,
          Unit: 'C',
          UnitType: 17,
          Phrase: '선선함',
        },
        Maximum: {
          Value: 22.7,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 11.1,
          Unit: 'C',
          UnitType: 17,
          Phrase: '선선함',
        },
        Maximum: {
          Value: 20.7,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      HoursOfSun: 1.1,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
          Type: '오존',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 3,
          Category: '보통',
          CategoryValue: 2,
        },
      ],
      Day: {
        Icon: 7,
        IconPhrase: '흐림',
        HasPrecipitation: false,
        ShortPhrase: '흐림',
        LongPhrase: '흐림',
        PrecipitationProbability: 25,
        ThunderstormProbability: 0,
        RainProbability: 25,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.4,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 167,
            Localized: '남남동',
            English: 'SSE',
          },
        },
        WindGust: {
          Speed: {
            Value: 35.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 192,
            Localized: '남남서',
            English: 'SSW',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 100,
        Evapotranspiration: {
          Value: 2.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 2541.6,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 18,
        IconPhrase: '비',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
        ShortPhrase: '비가 내림',
        LongPhrase: '비가 내림',
        PrecipitationProbability: 94,
        ThunderstormProbability: 0,
        RainProbability: 94,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 133,
            Localized: '남동',
            English: 'SE',
          },
        },
        WindGust: {
          Speed: {
            Value: 25.9,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 120,
            Localized: '동남동',
            English: 'ESE',
          },
        },
        TotalLiquid: {
          Value: 16,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 16,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 9,
        HoursOfRain: 9,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 99,
        Evapotranspiration: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 49,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=4&unit=c',
      Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=4&unit=c',
    },
    {
      Date: '2023-04-15T07:00:00+09:00',
      EpochDate: 1681509600,
      Sun: {
        Rise: '2023-04-15T05:54:00+09:00',
        EpochRise: 1681505640,
        Set: '2023-04-15T18:59:00+09:00',
        EpochSet: 1681552740,
      },
      Moon: {
        Rise: '2023-04-15T03:11:00+09:00',
        EpochRise: 1681495860,
        Set: '2023-04-15T13:23:00+09:00',
        EpochSet: 1681532580,
        Phase: 'WaningCrescent',
        Age: 24,
      },
      Temperature: {
        Minimum: {
          Value: 5.5,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 20.2,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 3.3,
          Unit: 'C',
          UnitType: 17,
          Phrase: '추움',
        },
        Maximum: {
          Value: 21.1,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 3.3,
          Unit: 'C',
          UnitType: 17,
          Phrase: '추움',
        },
        Maximum: {
          Value: 17.9,
          Unit: 'C',
          UnitType: 17,
          Phrase: '쾌적함',
        },
      },
      HoursOfSun: 7,
      DegreeDaySummary: {
        Heating: {
          Value: 5,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
          Type: '오존',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: '좋음',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 8,
          Category: '건강에 해로움',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 13,
        IconPhrase: '대체로 흐리고 소나기',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Moderate',
        ShortPhrase: '오전에 소나기; 대체로 흐림',
        LongPhrase: '오전에 소나기; 대체로 흐림',
        PrecipitationProbability: 87,
        ThunderstormProbability: 17,
        RainProbability: 87,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 16.7,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 273,
            Localized: '서',
            English: 'W',
          },
        },
        WindGust: {
          Speed: {
            Value: 63,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 265,
            Localized: '서',
            English: 'W',
          },
        },
        TotalLiquid: {
          Value: 4.9,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 4.9,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 3,
        HoursOfRain: 3,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 45,
        Evapotranspiration: {
          Value: 3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5503.9,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Night: {
        Icon: 36,
        IconPhrase: '간헐적으로 흐림',
        HasPrecipitation: false,
        ShortPhrase: '약간 흐림',
        LongPhrase: '약간 흐림',
        PrecipitationProbability: 4,
        ThunderstormProbability: 0,
        RainProbability: 4,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 14.8,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 269,
            Localized: '서',
            English: 'W',
          },
        },
        WindGust: {
          Speed: {
            Value: 44.4,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 272,
            Localized: '서',
            English: 'W',
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 48,
        Evapotranspiration: {
          Value: 0.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 78.8,
          Unit: 'W/m²',
          UnitType: 33,
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=5&unit=c',
      Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/daily-weather-forecast/2330381?day=5&unit=c',
    },
  ],
};
const current = {
  LocalObservationDateTime: '2023-04-10T21:28:00+09:00',
  EpochTime: 1681129680,
  WeatherText: '대체로 맑음',
  WeatherIcon: 34,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: false,
  Temperature: {
    Metric: {
      Value: 15.2,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 59,
      Unit: 'F',
      UnitType: 18,
    },
  },
  RealFeelTemperature: {
    Metric: {
      Value: 15.8,
      Unit: 'C',
      UnitType: 17,
      Phrase: '선선함',
    },
    Imperial: {
      Value: 60,
      Unit: 'F',
      UnitType: 18,
      Phrase: '선선함',
    },
  },
  RealFeelTemperatureShade: {
    Metric: {
      Value: 15.8,
      Unit: 'C',
      UnitType: 17,
      Phrase: '선선함',
    },
    Imperial: {
      Value: 60,
      Unit: 'F',
      UnitType: 18,
      Phrase: '선선함',
    },
  },
  RelativeHumidity: 45,
  IndoorRelativeHumidity: 33,
  DewPoint: {
    Metric: {
      Value: 3.4,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 38,
      Unit: 'F',
      UnitType: 18,
    },
  },
  Wind: {
    Direction: {
      Degrees: 270,
      Localized: '서',
      English: 'W',
    },
    Speed: {
      Metric: {
        Value: 3.2,
        Unit: 'km/h',
        UnitType: 7,
      },
      Imperial: {
        Value: 2,
        Unit: 'mi/h',
        UnitType: 9,
      },
    },
  },
  WindGust: {
    Speed: {
      Metric: {
        Value: 5.8,
        Unit: 'km/h',
        UnitType: 7,
      },
      Imperial: {
        Value: 3.6,
        Unit: 'mi/h',
        UnitType: 9,
      },
    },
  },
  UVIndex: 0,
  UVIndexText: '낮음',
  Visibility: {
    Metric: {
      Value: 24.1,
      Unit: 'km',
      UnitType: 6,
    },
    Imperial: {
      Value: 15,
      Unit: 'mi',
      UnitType: 2,
    },
  },
  ObstructionsToVisibility: '',
  CloudCover: 11,
  Ceiling: {
    Metric: {
      Value: 12192,
      Unit: 'm',
      UnitType: 5,
    },
    Imperial: {
      Value: 40000,
      Unit: 'ft',
      UnitType: 0,
    },
  },
  Pressure: {
    Metric: {
      Value: 1014,
      Unit: 'mb',
      UnitType: 14,
    },
    Imperial: {
      Value: 29.94,
      Unit: 'inHg',
      UnitType: 12,
    },
  },
  PressureTendency: {
    LocalizedText: '일정',
    Code: 'S',
  },
  Past24HourTemperatureDeparture: {
    Metric: {
      Value: 1.6,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 3,
      Unit: 'F',
      UnitType: 18,
    },
  },
  ApparentTemperature: {
    Metric: {
      Value: 16.1,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 61,
      Unit: 'F',
      UnitType: 18,
    },
  },
  WindChillTemperature: {
    Metric: {
      Value: 15,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 59,
      Unit: 'F',
      UnitType: 18,
    },
  },
  WetBulbTemperature: {
    Metric: {
      Value: 9.2,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 49,
      Unit: 'F',
      UnitType: 18,
    },
  },
  Precip1hr: {
    Metric: {
      Value: 0,
      Unit: 'mm',
      UnitType: 3,
    },
    Imperial: {
      Value: 0,
      Unit: 'in',
      UnitType: 1,
    },
  },
  PrecipitationSummary: {
    Precipitation: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    PastHour: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past3Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past6Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past9Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past12Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past18Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    Past24Hours: {
      Metric: {
        Value: 0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0,
        Unit: 'in',
        UnitType: 1,
      },
    },
  },
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: {
        Metric: {
          Value: 15.2,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 59,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Maximum: {
        Metric: {
          Value: 23.6,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
      },
    },
    Past12HourRange: {
      Minimum: {
        Metric: {
          Value: 11,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 52,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Maximum: {
        Metric: {
          Value: 23.6,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
      },
    },
    Past24HourRange: {
      Minimum: {
        Metric: {
          Value: 4,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 39,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Maximum: {
        Metric: {
          Value: 23.6,
          Unit: 'C',
          UnitType: 17,
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
      },
    },
  },
  MobileLink:
    'http://www.accuweather.com/ko/kr/buk-gu/2330381/current-weather/2330381',
  Link: 'http://www.accuweather.com/ko/kr/buk-gu/2330381/current-weather/2330381',
};

const daytimeColor = {
  dawn: 'to bottom, #1B2A4A, #7D6180',
  night: 'to bottom, #05051C, #334461',
  day: 'to bottom, #094F91, #ABC9E8',
  rain: 'to bottom, #485767, #485667',
};

const getCurrentSkyColor = (getCurrentCondition, getFiveDaysFcst) => {
  const isDayTime = getCurrentCondition?.IsDayTime;
  const now = new Date().getTime();
  const sunriseTime = new Date(
    getFiveDaysFcst?.DailyForecasts[0].Sun.Rise || 0
  ).getTime();
  const sunsetTime = new Date(
    getFiveDaysFcst?.DailyForecasts[0].Sun.Set || 0
  ).getTime();

  if (
    getCurrentCondition?.PrecipitationSummary.Past3Hours.Metric.Value >= 1 ||
    false
  ) {
    return daytimeColor['rain'];
  }
  // 현재시간으로부터 일몰이 30분전부터 'dawn'을 출력
  if (isDayTime && sunsetTime - now <= 1000 * 60 * 30) {
    return daytimeColor['dawn'];
  }
  // 현재시간으로부터 일출 30분전부터 'dawn'을 출력
  if (!isDayTime && sunriseTime - now <= 1000 * 60 * 30) {
    return daytimeColor['dawn'];
  }

  if (isDayTime) {
    return daytimeColor['day'];
  } else {
    return daytimeColor['night'];
  }
};

test('average', () => {
  const color = getCurrentSkyColor(current, days);
  expect(color).toBe('to bottom, #094F91, #ABC9E8');
});
