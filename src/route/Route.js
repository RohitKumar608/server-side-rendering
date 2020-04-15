import Home from ".././containers/Home";
import City from ".././containers/City";
import Admin from '../containers/Admin'
import App from "../App";
import PageNotFound from '../components/page-not-found'

const Routes = [{
    ...App,
    routes: [{
            ...City,
            path: '/',
            exact: true
        },
        {
            ...Home,
            path: "/users",
            exact: true,
        },
        {
            ...Admin,
            path: '/admin',
            exact: true
        },
        {
            ...PageNotFound,
            path: '',
        }
    ]
}];

export default Routes;