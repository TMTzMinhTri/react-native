import { takeLatest, take, call, put, delay, race } from "redux-saga/effects";
import axios from "axios";
export default function* watcherSagaTakeLatest() {
    yield takeLatest("TEST", workerSaga);
}

const fetchDog = () => {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
};

function* workerSaga() {
    console.log("dog")
    try {
        const { data } = yield call(fetchDog);
        const dog = data.message;
        console.log(dog)
    } catch (err) {
        yield put({ type: "API_CALL_FAILURE", err });
    }
}