// import React from "react";
// import { Route } from "react-router-dom";

// import Home from "./Home";
// import UserList from "./UserList";

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />{" "}
//       <Route exact path="/users" component={UserList} />{" "}
//     </div>
//   );
// };

import React from "react";
import Home from "./Home";
import UserList from "./UserList";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: '/users',
    component: UserList
  }
];

export default Routes;