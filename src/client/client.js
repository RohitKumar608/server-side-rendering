import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";

import reducers from "../store/reducers";
import Routes from "./components/Routes";

const store = createStore(reducers, {},applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>

    </BrowserRouter>{" "}
  </Provider>,
  document.getElementById("root")
);
