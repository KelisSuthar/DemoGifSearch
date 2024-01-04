import {checkConnectivity} from '../utils/constants/appConstants';

import {internetConnectivity} from './actions';
import {put} from 'redux-saga/effects';

export const fetchGet = async (payload: {url: any}) => {
  const res = await checkConnectivity();

  let headders = {'Content-Type': 'application/json'};

  console.log('fetchGet...', payload?.url);

  if (res) {
    try {
      const response = await fetch(`${payload?.url}`, {
        method: 'GET',
        headers: headders,
      });

      if (response.status === 200) {
        const jsonResponse = await response.json();
        console.log('jsonResponse........success\n', jsonResponse);
        return Promise.resolve(jsonResponse);
      }
      const jsonResponse = await response.json();
      console.log('jsonResponse........error\n', jsonResponse);
      const error = jsonResponse.jsonResponse;
      if (jsonResponse?.message == 'Unauthorized user!') {
      }
      return Promise.reject(jsonResponse?.message);
    } catch (error) {
      return Promise.reject('Something went wrong\n' + error);
    }
  } else {
    return Promise.reject('No Internet');
  }
};

export const fetchPost = async (payload: {url: any; params: any}) => {
  console.log('fetchPost...', payload);
  const res = await checkConnectivity();

  let headders = {'Content-Type': 'application/json'};

  if (res) {
    try {
      const response = await fetch(`${payload?.url}`, {
        method: 'POST',
        headers: headders,
        body: JSON.stringify(payload?.params),
      });
      if (response.status === 200) {
        const jsonResponse = await response.json();
        console.log('jsonResponse........success\n', jsonResponse);
        return Promise.resolve(jsonResponse);
      }
      const jsonResponse = await response.json();
      console.log('jsonResponse........error\n', jsonResponse);
      const error = jsonResponse.message;
      if (jsonResponse?.message == 'Unauthorized user!') {
        // EventBus.getInstance().fireEvent("LogoutEvent", {
        // })
      }
      return Promise.reject(jsonResponse?.message);
    } catch (error) {
      console.log('==================================== ERROR');
      console.log(error);
      console.log('==================================== ERROR');
      return Promise.reject('Something went wrong');
    }
  } else {
    return Promise.reject('No Internet');
  }
};
export const fetchDelete = async (payload: {url: any; params: any}) => {
  const res = await checkConnectivity();

  console.log('fetchDelete...', payload?.url);

  let headders = {'Content-Type': 'application/json'};

  if (res) {
    try {
      const response = await fetch(`${payload?.url}`, {
        method: 'DELETE',
        headers: headders,
        body: JSON.stringify(payload?.params),
      });
      if (response.status === 200) {
        const jsonResponse = await response.json();
        console.log('jsonResponse........success\n', jsonResponse);
        return Promise.resolve(jsonResponse);
      }
      const jsonResponse = await response.json();
      console.log('jsonResponse........error\n', jsonResponse);
      const error = jsonResponse.jsonResponse;
      if (jsonResponse?.message == 'Unauthorized user!') {
      }
      return Promise.reject(jsonResponse?.message);
    } catch (error) {
      console.log('==================================== ERROR');
      console.log(error);
      console.log('==================================== ERROR');
      return Promise.reject('Something went wrong\n' + error);
    }
  } else {
    return Promise.reject('No Internet');
  }
};
