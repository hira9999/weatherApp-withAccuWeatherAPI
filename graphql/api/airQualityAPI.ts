import { RESTDataSource } from '@apollo/datasource-rest';

class AirQualityAPI extends RESTDataSource {
  override baseURL = 'https://apis.data.go.kr';

  async getCtprvnRltmMesureDnsty(
    sidoName: string,
    locationKey: string | number
  ) {
    try {
      const data = await this.get(
        '/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
        {
          params: {
            serviceKey: process.env.AIR_QUALITY_API_KEY,
            returnType: 'json',
            pageNo: '1',
            numOfRows: '100',
            sidoName,
            ver: '1.4',
          },
        }
      );

      const KhaiValues =
        data.response.body.items.length === 0 ? null : data.response.body.items;

      return {
        khaiValues: KhaiValues,
        locationKey,
        sidoName,
      };
    } catch (error) {
      console.error(error);
      throw new Error((error as Error).message);
    }
  }
}

export default AirQualityAPI;
