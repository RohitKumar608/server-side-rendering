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
        return (<div key={id} style={{padding: '5px',backgroundColor: 'gray', width: '50%', marginTop: '10px', marginLeft: '25%'}}>
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
            <div onClick={()=>console.log('Hi there')} >
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