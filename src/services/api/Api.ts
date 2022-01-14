import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from 'config';

class Api {
  protected api: AxiosInstance = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true,
  });

  constructor() {
    this.api.interceptors.request.use(this.handleRequest);
  }

  private handleRequest = (requestConfig: AxiosRequestConfig) => {
    if (!requestConfig.headers) {
      requestConfig.headers = {};
    }
    requestConfig.headers['X-Timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return requestConfig;
  };
}

export default Api;
