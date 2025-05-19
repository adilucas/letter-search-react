import axios, { AxiosError} from 'axios';

const ENDPOINT = '/cities';

export interface CityItem {
  id: number;
  name: string;
}

export interface Response {
  list: CityItem[];
}

export const getCityList = async() => {
  try {
    const res = await axios.get<Response>(ENDPOINT);
    return res.data.list;
  } catch (err) {
    throw err instanceof AxiosError ? new Error(err.message) : new Error('Internal Error');
  }
}
