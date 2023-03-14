/* eslint-disable max-len */
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: `${CONFIG.BASE_URL}search?q=query`,
  ADDREVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
