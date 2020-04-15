import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';

import reducers from "../store/reducers";

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: { cookie: req.get('cookie') || '' }
    })
    const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
    return store;
};