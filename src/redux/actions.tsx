import {createActions} from 'redux-actions';

export const {
  displayLoading,
  internetConnectivity,
  getGif,
  getGifData,
  getGifDataError,
} = createActions(
  'DISPLAY_LOADING',
  'INTERNET_CONNECTIVITY',
  'GET_GIF',
  'GET_GIF_DATA',
  'GET_GIF_DATA_ERROR',
);
