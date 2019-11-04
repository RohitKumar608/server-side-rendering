import Home from "./containers/Home";
import UserList from "./containers/UserList";

const Routes = [{
        ...Home,
        path: "/",
        exact: true,
    },
    {
        ...UserList,
        path: '/users',
    }
];

export default Routes;