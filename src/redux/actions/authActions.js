import * as actionTypes from '../actionTypes';

export const fetchLoginAPI = (data) => {
  return { type: actionTypes.FETCH_LOGIN , data}   
}

export const fetchRegisterAPI = (data) => {
  return { type: actionTypes.FETCH_REGISTER, data}
}