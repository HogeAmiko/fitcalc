import {combineReducers, createStore} from "redux";
import slideReducer from "../redux/slide-reducer";


const rootReducer = combineReducers({
    slide: slideReducer,
});

const store = createStore(rootReducer);


export default store;