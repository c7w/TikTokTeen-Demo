import {unwrapResult} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import Toast from 'react-native-root-toast';
import Store, {setParentProps, setChildProps} from './Store';

export interface LoginStatus {
  status: String;
}

export const BASE_URL = 'http://121.5.165.232:12001';

const login = async (
  userID: String | undefined,
  password: String | undefined,
  role: String,
): Promise<LoginStatus> => {
  const id = Number(userID);
  if (!id) {
    return {status: 'failed'};
  }
  const url = '/login'; // Method: POST
  const data = await fetch(BASE_URL + url, {
    method: 'POST',
    body: JSON.stringify({id, password, role}),
    headers: {'Content-Type': 'application/json'},
  })
    .then(res => res.json())
    .catch(() => {
      return {status: 'failed'};
    });
  return data;
};

const register = async (
  userID: String | undefined,
  password: String | undefined,
  role: String,
): Promise<LoginStatus> => {
  const id = Number(userID);
  if (!id) {
    return {status: 'failed'};
  }
  //Toast.show(JSON.stringify({id, password, role, name: String(id)}));
  const url = '/register'; // Method: POST
  const data = await fetch(BASE_URL + url, {
    method: 'POST',
    body: JSON.stringify({id, password, role, name: String(id)}),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json());
  return data;
};

const getUser = async (userID: Number, role: String) => {
  const url = '/user';
  const data = await fetch(BASE_URL + url + '?id=' + userID + '&role=' + role)
    .then(res => res.json())
    .catch(() => {
      return {status: 'failed'};
    });
  if (!data.hasOwnProperty('status')) {
    if (role === 'Parent') {
      Store.dispatch(setParentProps(data));
    } else {
      Store.dispatch(setChildProps(data));
    }
  }
};

const ParseTime = (time: number): String => {
  let result = '';
  if (time === 0) {
    result = '0 分';
    return result;
  }
  if (time < 60) {
    result = `${time} 分`;
    return result;
  }
  const minute = time % 60;
  const hour = (time - minute) / 60;
  result = `${hour} 时`;
  if (minute > 0) {
    result += ` ${minute} 分`;
  }
  return result;
};

export {login, register, getUser, ParseTime};
