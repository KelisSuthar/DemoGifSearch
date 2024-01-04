import {fork, all} from 'redux-saga/effects';
import saga from '../redux/saga';

function* rootSaga() {
  yield all([fork(saga)]);
}

export default rootSaga;
