import { createStore } from "redux";

const initialState = {
    counter: 0,
}

const reducerFn = (state = initialState, action) =>{
    return state;
}

const store = createStore(reducerFn);

export default store;