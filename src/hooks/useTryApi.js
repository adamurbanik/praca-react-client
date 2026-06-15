import { useReducer } from 'react';
import { createTryApiReducer } from './reducer';

const initialState = {
  isLoading: false,
  appDetails: { appKey: '', appSecret: '', appName: '', appDescription: '' },
  isAppDetailsError: false,
  isSubmitError: null,
};

export const useTryApi = () => {
  const tryApiReducer = createTryApiReducer;
  const [
    {
      appDetails,
      verificationResponse,
      reportResponse,
      isLoading,
      isAppDetailsError,
    },
    dispatch,
  ] = useReducer(tryApiReducer, initialState);

  return [
    {
      appDetails,
      verificationResponse,
      reportResponse,
      isLoading,
      isAppDetailsError,
    }
  ]
};
