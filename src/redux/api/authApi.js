import * as apiConstants from '../constants/authConstants';
import apiCall from './index';

export const fetchLogin = (parameter) => {
  return apiCall("POST", apiConstants.fetchSignIn, parameter);
}

export const fetchRegister = (parameter) => {
  return apiCall('POST', apiConstants.fetchRegister, parameter)
}