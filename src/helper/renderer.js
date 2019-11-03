import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import Routes from "../client/components/Routes";

const renderer = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>{" "}
    </Provider>
  );

  return `<html> <head></head><body> <div id="root">     ${content}     </div>
        <script src="public/bundle.js"></script>
        
        </body></html>`;
};

export default renderer;
