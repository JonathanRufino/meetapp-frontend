import axios from 'axios';

import i18n from '~/config/i18n';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'https://my-json-server.typicode.com/JonathanRufino/meetapp-frontend';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  config => {
    config.headers['Accept-Language'] = i18n.language;

    return config;
  },
  err => Promise.reject(err)
);

export default api;
