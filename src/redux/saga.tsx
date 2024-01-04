import {call, put, takeLatest, select} from 'redux-saga/effects';

import {
  displayLoading,
  getGif,
  getGifData,
  getGifDataError,
  internetConnectivity,
} from './actions';

import {fetchPost, fetchGet, fetchDelete} from './services';
import {Platform} from 'react-native';
import {base_url_qa} from '../utils/constants/apiConstant';
import {gifCreds} from '../utils/constants/appConstants';

function* getGifListSaga({payload}: any): Generator<any, any, any> {
  try {
    yield put(displayLoading(true));

    const response = yield call(fetchGet, {
      url: `${base_url_qa}?api_key=${gifCreds.api_key}&q=${payload.search}&offset=${payload.offset}&limit=10`,
    });

    yield put(getGifData(response));
    yield put(displayLoading(false));
    yield put(internetConnectivity(false));
  } catch (error) {
    yield put(getGifData());
    yield put(getGifDataError(error));
    yield put(displayLoading(false));
    yield put(internetConnectivity(error == 'No Internet' ? true : false));
  }
}

function* saga() {
  yield takeLatest(getGif().type, getGifListSaga);
}

export default saga;
