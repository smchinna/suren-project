import axios from 'axios';

const BASE_URL = window._env_.API_URL;

const instance = axios.create({
  baseURL: BASE_URL
});

// request header
instance.interceptors.request.use(
  config => parseConfig(config),
  error => Promise.reject(error)
);

// configuration parse
const parseConfig = (config) => {
  //let token = splitCookie("auth_token");
  const token =
    localStorage && localStorage.getItem('auth_token')
      ? localStorage.getItem('auth_token')
      : '';
  const configuration = { ...config };
  configuration.headers.Authorization = token;
  return configuration;
};

// response parse
instance.interceptors.response.use(
  response => parseBody(response),
  error => {
    if (error.response) {
      return parseError(error.response.data);
    } else {
      return Promise.reject(error);
    }
  }
);

// parse response
const parseBody = (response) => {
  if (response.data.status_code === 200) {
    return response.data;
  } else {
    return parseError(response.data);
  }
};

// parse error
const parseError = (messages) => {
  if (messages.status.status_code === 401) {
    window.location.replace('/login');
    localStorage.removeItem('auth_token');
    return messages;
  } else {
    return Promise.reject({ messages: 'Something went Wrong' });
  }
};

export const http = instance;
