import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchPoses(action) {
  console.log("POSES SAGA", action.payload);
  try {

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/poses');
    
    console.log('response', response)
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    const newArray = response.data.filter((item) => item.purpose === action.payload);
    console.log(newArray)
    yield put({ type: 'SET_POSES', payload: newArray});
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* posesSaga() {
  yield takeLatest('FETCH_POSES', fetchPoses);
}

export default posesSaga;
