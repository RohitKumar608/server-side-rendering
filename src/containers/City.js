import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class City extends Component{
    render(){
        return(
            <div>
                <Link to="/">Users</Link>
                City Page
            </div>
        )
    }
}

export default {
    component: City
  };
