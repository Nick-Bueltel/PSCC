import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Admin from './admin'
import Home from './home'
import User from './user'


class NavBar extends Component {
    render() {
      return (
<HashRouter>       
<React.Fragment>
    <div className="NavBar">
        <Menu>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/admin">Admin</NavLink>
            </Menu.Item> 
            <Menu.Item>
                <NavLink to="/user">user</NavLink>
            </Menu.Item>     
        </Menu>
    </div>
    <div className="content">
        <Route exact path="/" component ={Home}/>
        <Route exact path="/admin" component ={Admin}/>
        <Route exact path="/user" component ={User}/>


    </div>
</React.Fragment>
</HashRouter>   
      );
    }
  }
   
  export default NavBar;