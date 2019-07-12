import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Admin from './admin'
import Home from './home'


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
        </Menu>
    </div>
    <div className="content">
        <Route exact path="/" component ={Home}/>
        <Route exact path="/admin" component ={Admin}/>


    </div>
</React.Fragment>
</HashRouter>   
      );
    }
  }
   
  export default NavBar;