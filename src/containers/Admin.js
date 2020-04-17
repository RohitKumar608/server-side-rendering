import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdminData, cancelApiRequest } from "../store/actions/actions";
import { Redirect } from "react-router-dom";
import Card from "../components/Card";
class Admin extends Component {
  componentDidMount() {
    this.props.getAdminData();
  }
  componentWillUnmount () {
    cancelApiRequest()
  }
  render() {
    const { isUserLogin, albums } = this.props;
    const resizeAlbumData = albums.slice(0,100)
    let adminData = "";
    if (isUserLogin) {
      adminData = (
        <div
          className="card-columns"
          style={{ display: "flex", padding: "40px", flexWrap: "wrap" }}
        >
          {resizeAlbumData.map(album => (
            <Card key={album.id} {...album} />
          ))}
        </div>
      );
    } else {
      // adminData = <Redirect to="/users" />;
      adminData = <h4>Your are not Authorized Person </h4>;
    }

    return <div>{adminData}</div>;
  }
}

const loadData = store => {
  store.dispatch(fetchAdminData());
};

const mapStateToProps = ({ auth }) => {
  return {
    albums: auth.albumList,
    isUserLogin: auth.isUserLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdminData: (action) => dispatch(fetchAdminData(action))
  };
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(Admin),
  loadData: loadData
};
