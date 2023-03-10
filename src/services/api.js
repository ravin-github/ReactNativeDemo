import axios from 'axios';
import {BASE_URL} from '@config';

export const instance = axios.create({
  baseURL: BASE_URL,
});
// if need to intercept 
instance.interceptors.response.use(
  response => {
    if (response && response?.data) {
      const data = response.data;
      if (data.success === false && data.errors && data.errors.length > 0) {
        const error = data.errors[0];
        const key = error.message;
        return Promise.reject();
      }
    }
    return response;
  },
  error => {
    const {response} = error; 
    if (response?.status === 401) {
      alert(response?.data?.error?.message)
    }
    if (response?.status === 501) {
      alert('Internal server error Try again in sometime');
    }
    if(response?.status === 422) return response
    return Promise.reject(error);
  },
);
