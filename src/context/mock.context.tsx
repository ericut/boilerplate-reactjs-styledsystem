import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IMock } from '../interfaces/mock.interface';
import { Service } from '../service/mockService';

const MOCK_GLOBAL_VAR = 'mockVar';

type IMockContextData = {
  mock: IMock[] | null;
  mockBool: boolean;
  mockFunc: () => Promise<void>;
};

type IMockProviderProps = {
  children: ReactNode;
};

export const MockContext = createContext({} as IMockContextData);

function MockProvider({ children }: IMockProviderProps) {
  const [mockBool, setMockBool] = useState(true);
  const [mock, setMock] = useState<IMock[] | null>(null);

  useEffect(() => {
    mockFunc();
  }, []);

  async function mockFunc() {
    try {
      setMockBool(true);
      const mockVar = `${MOCK_GLOBAL_VAR}`;
      const mockResponse = await Service.getMockList();
      if (mockResponse.status === 200) {
        console.log(mockVar);
        console.log(mockResponse.data.content);
        setMock(mockResponse.data.content);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Finish');
      setMockBool(false);
    }
  }

  return <MockContext.Provider value={{ mock, mockBool, mockFunc }}>{children}</MockContext.Provider>;
}

function useMock() {
  const context = useContext(MockContext);
  return context;
}

export { MockProvider, useMock };
