import { ITryApiState } from "./types";

export const REQUEST_INIT = 'REQUEST_INIT';
export const SET_APP_DETAILS = 'SET_APP_DETAILS';
export const SET_APP_DETAILS_ERROR = 'SET_APP_DETAILS_ERROR';
export const VERIFICATION_SUBMIT = 'VERIFICATION_SUBMIT';
export const REPORT_SUBMIT = 'REPORT_SUBMIT';

export const createTryApiReducer =
  <T>(): ((state, action) => ITryApiState) =>
  (state, action) => {
    switch (action.type) {
      case REQUEST_INIT:
        return {
          ...state,
          isLoading: true,
          response: null,
        };

      case SET_APP_DETAILS:
        return {
          isLoading: false,
          isAppDetailsError: false,
          appDetails: action.payload,
        };

      case SET_APP_DETAILS_ERROR:
        return {
          isLoading: false,
          isAppDetailsError: true,
        };

      case VERIFICATION_SUBMIT:
        return {
          ...state,
          isLoading: false,
          verificationResponse: action.payload,
        };

      case REPORT_SUBMIT:
        return {
          ...state,
          isLoading: false,
          reportResponse: action.payload,
        };

      default:
        return { ...state };
    }
  };
