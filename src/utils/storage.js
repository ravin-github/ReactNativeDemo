import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const set = (key, value) => {
  let jsonData = JSON.stringify(value);
  storage.set(key, jsonData);
};

export const get = key => {
  let jsonData = storage.getString(key);
  if (jsonData === undefined) {
    return undefined;
  } else {
    return JSON.parse(jsonData);
  }
};

export const remove = key => {
  storage.delete(key);
};

export const clear = () => {
  storage.clearAll();
};