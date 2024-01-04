import produce from 'immer';
import {handleActions} from 'redux-actions';

import {
  displayLoading,
  internetConnectivity,
  getGifData,
  getGifDataError,
} from './actions';
import {Alert} from 'react-native';
import {act} from 'react-test-renderer';

export const initialState = {
  loader: false,
  internetConnection: false,
  getGifData: '',
  getGifError: '',
};

const Reducer = handleActions(
  {
    [displayLoading().type]: produce(
      (draft: {loader: any}, action: {payload: any}) => {
        draft.loader = action.payload;
      },
    ),
    // INTERNET CONNECTIVITY
    [internetConnectivity().type]: produce(
      (draft: {internetConnection: any}, action: {payload: any}) => {
        draft.internetConnection = action.payload;
      },
    ),
    //GIF LIST
    [getGifData().type]: produce(
      (
        draft: {getGifData: any; getGifError: string},
        action: {payload: any},
      ) => {
        draft.getGifData = action.payload;
        draft.getGifError = '';
      },
    ),
    [getGifDataError().type]: produce(
      (draft: {getGifError: any}, action: {payload: any}) => {
        draft.getGifError = action.payload;
      },
    ),
  },
  initialState,
);

export default Reducer;
