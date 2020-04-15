import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript'
import Routes from "../route/Route";

const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>{" "}
    </Provider>
  );

  return `<html> <head></head><body><link rel="stylesheet" type="text/css" href="public/main.css"> <div id="root">     ${content}     </div>
        <script>window.initialState=${serialize(store.getState())}</script>
        <script src="public/bundle.js"></script>
        </body></html>`;
};

export default renderer;
