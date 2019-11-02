// import React from "react";

// const home = () => {
//   return <div>Home Page </div>;
// };

// export default home;

import React from "react";

export default class Home extends React.Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
    console.log('clicking')
    this.setState({count:this.state.count+1})
    this.setState(prevState => ({count:prevState.count + 1}));
  };
  render() {
    return (
      <div>
        <div style={style}>
          {" "}
          Home Page Auto Reload with new Count<span>{this.state.count}</span>
        </div>

        <button onClick={() => this.handleIncrement}>Press Me!</button>
      </div>
    );
  }
}

const style = {
  float: "right",
  marginRight: "50%",
  backgroundColor: "#777"
};
