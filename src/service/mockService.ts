import { mockData } from '../data/mock.data';
import { IGenericResponseProps } from '../interfaces/genericResponse';
import { IMock } from '../interfaces/mock.interface';
// via axios
import axios from 'axios';

export const Service = {
  getMockList: async () => {
    return await Promise.resolve<IGenericResponseProps<IMock[]>>({
      status: 200,
      data: { content: mockData, success: true, error_message: null },
    });
  },
};

export const ServiceAPI = axios.create({
  baseURL: 'http://localhost:4000',
});
