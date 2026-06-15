export interface IAppDetails {
  appKey: string;
  appSecret: string;
  appName: string;
  appDescription: string;
}


export interface ITryApiState {
  isLoading: boolean;
  appDetails: IAppDetails;
  isAppDetailsError: boolean;
  verificationResponse: null;
  reportResponse: null;
}