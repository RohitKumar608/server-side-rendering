import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderUserList = () => {
    return (
      this.props.users &&
      this.props.users.length &&
      this.props.users.map(user => {
        return <li key={user.id}> {user.name} </li>;
      })
    );
  };

  render() {
    return (
      <div>
        <h3> UserList </h3> <ul> {this.renderUserList()} </ul>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.userList
  };
};

function loadData(store) {
  return store.dispatch(fetchUser());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUser }
  )(UserList)
};
