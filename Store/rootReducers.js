import { combineReducers } from 'redux';
import HomeReducer from "../Screens/HomeScreen/saga/reducer";

const allReducers = {
    HomeReducer
};

export default combineReducers({
    ...allReducers,
});