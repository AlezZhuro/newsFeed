import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

export const token = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    res => {
      return res;
    },
    (error: AxiosError | Error): Promise<AxiosError> => {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error);
      }
      return Promise.reject(error);
    },
  );
};
