import express from "express";
import renderer from './helper/renderer';
import createStore from './helper/createStore';
import { matchRoutes } from "react-router-config";
import Routes from './client/components/Routes';

const app = express();
app.use('/public', express.static('public'))
    // app.use(express.static('public'));

const port = process.env.port || 3000;
app.get("*", (req, res) => {
    console.log(matchRoutes(Routes, req.path))
    const store = createStore();
    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log("Listening on prot 3000");
});