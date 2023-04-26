import axios from 'axios';

const instence = axios.create({
  baseURL: 'https://dataservice.accuweather.com',
});

export default instence;
