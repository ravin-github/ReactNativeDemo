import { instance } from './api';
import {
  LOGIN,
} from '@config';

// just for configuration 

const userLogin = async (data) =>{
 return  instance.post(LOGIN,data)
 .then((res) => {return  res})
 .catch((err) => {return  err?.response})
}

const authServices = {
  userLogin,
}
export default authServices;
