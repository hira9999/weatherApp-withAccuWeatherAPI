import { RESTDataSource } from '@apollo/datasource-rest';
import { v4 as uuidv4 } from 'uuid';

class WeatherAPI extends RESTDataSource {
  override baseURL = 'https://dataservice.accuweather.com';

  async getLocation(lat: string | number, lng: string | number) {
    try {
      const data = await this.get('/locations/v1/cities/geoposition/search', {
        params: {
          apikey: process.env.ACCUWEATHER_API_KEY,
          q: lat + ',' + lng,
          language: 'ko',
          details: 'true',
          toplevel: 'true',
        },
      });
      return { ...data, id: data.Key };
    } catch (error) {
      console.error(error);
      throw new Error((error as Error).message);
    }
  }

  async getCurrentCondition(locationKey: string) {
    try {
      const data = await this.get(`/currentconditions/v1/${locationKey}`, {
        params: {
          apikey: process.env.ACCUWEATHER_API_KEY,
          language: 'ko',
          details: 'true',
        },
      });
      return { ...data[0], locationKey };
    } catch (error) {
      console.error(error);
      throw new Error((error as Error).message);
    }
  }

  async getFiveDaysFcst(locationKey: string) {
    try {
      const data = await this.get(`/forecasts/v1/daily/5day/${locationKey}`, {
        params: {
          apikey: process.env.ACCUWEATHER_API_KEY,
          language: 'ko',
          details: 'true',
          metric: 'true',
        },
      });
      return { ...data, locationKey };
    } catch (error) {
      console.error(error);
      throw new Error((error as Error).message);
    }
  }

  async getTwelveHoursFcst(locationKey: string) {
    try {
      const data = await this.get(
        `/forecasts/v1/hourly/12hour/${locationKey}`,
        {
          params: {
            apikey: process.env.ACCUWEATHER_API_KEY,
            language: 'ko',
            details: 'true',
            metric: 'true',
          },
        }
      );
      return { HoursFcsts: data, locationKey };
    } catch (error) {
      console.error(error);
      throw new Error((error as Error).message);
    }
  }
}

export default WeatherAPI;
