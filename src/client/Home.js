// import React from "react";

// const home = () => {
//   return <div>Home Page </div>;
// };

// export default home;

import React from "react";

export default class Home extends React.Component{
  render(){
    return(
      <div style={style}>Home Page </div>
    )
  }
}

const style={
  float: 'right',
  marginRight: '50%',
  backgroundColor:'#777'
}
