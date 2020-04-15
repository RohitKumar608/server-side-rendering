import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/actions/actions'
import { Link  } from 'react-router-dom'
class Home extends Component{
    componentDidMount(){
        this.props.fetchUserList()
    }
    
    listRenderer = (user) => {
        const {email, name, id, username}= user
        return (<div key={id}>
            <p>
                <span>Name: {name}</span>
                <span>Email : {email}</span>
                <span>UserName : {username}</span>
            </p>
        </div>)
    }
    render(){
        const { userList } = this.props
        return(
            <div onClick={()=>console.log('Hi there')} style={{backgroundColor:'blue',color:'white'}}>
                <Link  to="/users">City</Link >
               { userList && userList.map((user)=>this.listRenderer(user)) }
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        userList: users.userList
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchUserList:()=>dispatch(fetchUser())
    }
}
function loadData(store) {
    return store.dispatch(fetchUser());
  }

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(Home),
    loadData:loadData
  };