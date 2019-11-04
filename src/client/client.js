import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";
import axios from 'axios';

import reducers from "../store/reducers";
import Routes from "./Routes";

const axiosInstance = axios.create({
  baseURL:'/api'
});



const store = createStore(reducers, window.initialState,applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>

    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
