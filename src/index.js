import express from "express";
import renderer from './helper/renderer';
import createStore from './helper/createStore';
import { matchRoutes } from "react-router-config";
import proxy from 'express-http-proxy';
import Routes from './client/Routes';

const app = express();
app.use('/api', proxy('https://react-ssr-api.herokuapp.com/users', {
    proxyReqOptDecorator(opts) {
        opts.header['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use('/public', express.static('public'));


const port = process.env.port || 3000;
app.get("*", (req, res) => {
    const store = createStore();
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    })
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
});

app.listen(port, () => {
    console.log("Listening on prot 3000");
});