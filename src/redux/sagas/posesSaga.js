import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPoses(action) {
  console.log("POSES SAGA", action.payload);
  try {
    const response = yield axios.get('/api/poses');
    
    console.log('response', response)
    const newArray = response.data.filter((item) => item.purpose === action.payload);
    console.log(newArray)
    yield put({ type: 'SET_POSES', payload: newArray});
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* postPose(action) {
  console.log("POSES SAGA", action.payload);
  try {
    yield axios.post('/api/poses', action.payload);
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* posesSaga() {
  yield takeLatest('FETCH_POSES', fetchPoses);
  yield takeLatest('POST_POSE', postPose);
}

export default posesSaga;
