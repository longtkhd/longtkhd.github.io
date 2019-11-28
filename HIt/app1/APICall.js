/* eslint-disable */
import axios from 'axios';
import * as urlConfig from './urlConfig';

const instance = axios.create({
  // baseURL: appConfig.BASE_URL,
  // timeout: appConfig.API_TIMEOUT,  
  
});

// async function getToken() {
//   try {
//     const resp = await axios({
//       method: 'post',
//       url: `${urlConfig.BASE_URL}/api/get-token`,
//       data: {
//         refreshToken: localStorage.getItem('refreshToken'),
//       },
//     });

//     return resp.data.token;
//   } catch (e) {
//     if ((e.response && e.response.code == 401) || e.response.code == 400) {
//       window.location = '/admin/login';
//     } else {
//       throw e;
//     }
//   }
// }

// instance.interceptors.request.use(
//   async config => {
//     const refreshToken = localStorage.getItem('refreshToken');
//     const token = localStorage.getItem('token');

//     if (config.url.startsWith('/admin')) {
//       // eslint-disable-next-line no-param-reassign
//       config.url = `${urlConfig.BASE_URL}${config.url}`;
//     }

//     if (config.url.startsWith(urlConfig.BASE_URL)) {
//       if (!refreshToken || !token) {
//         window.location = '/admin/login';
//       }
//       // eslint-disable-next-line no-param-reassign
//       config.headers['x-access-token'] = token;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );

// instance.interceptors.response.use(
//   response => response,
//   async error => {
//     const errorResponse = error.response;
//     if (errorResponse.status == 401) {
//       const token = await getToken();
//       localStorage.setItem('token', token);
//       return Promise.resolve(instance(errorResponse.config));
//     }
//     // If the error is due to other reasons, we just throw it back to axios
//     return Promise.reject(error);
//   },
// );

export default instance;
