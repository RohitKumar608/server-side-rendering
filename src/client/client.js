import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import reducers from "../store/reducers";
import Router from "./components/Routes";

const store = createStore(reducers, {},applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
