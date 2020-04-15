import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";
import axios from 'axios';

import reducers from "./store/reducers";
import Routes from "./route/Route";

const axiosInstance = axios.create({
  baseURL:'/api'
});
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

console.log(window.initialState)

const store = createStore(reducers, window.initialState,applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
