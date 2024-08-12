import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from './constants';

type ApiResponse<T = any> = {
  success: boolean;
  data: T;
  message: string;
};

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiamFuZWRvZUBleGFtcGxlLmNvbSIsImlhdCI6MTcyMzQzMTg2NCwiZXhwIjoxNzI0MDM2NjY0fQ.yaBiw7N66zUKaBWiGx4bjhMINona1-k_K4Wf4TWQ1UQ';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: { Authorization: 'Bearer ' + token },
});

export async function fetchData<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await instance.get<ApiResponse<T>>(endpoint);
  return response.data;
}

export async function postData<T>(
  endpoint: string,
  payload: any,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  const response = await instance.post<ApiResponse<T>>(
    endpoint,
    payload,
    config
  );
  return response.data;
}

export default instance;
