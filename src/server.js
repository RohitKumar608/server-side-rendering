import express from "express";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";

import Routes from "./route/Route";
import renderer from "./helpers/renderer";

const app = express();
app.use("/public", express.static("public"));

const port = process.env.port || 3000;
app.get("*", (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises)
        .then(() => {
            const context = {};
            const staticContent = renderer(req, store, context);
            if (context.url) {
                res.redirect(301, context.url);
            }
            if (context.notFound) {
                res.status(404);
            }
            res.send(staticContent);
        })
});

app.listen(port, () => {
    console.log("Listening on prot 3000");
});