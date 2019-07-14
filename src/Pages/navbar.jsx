import React from 'react';
import {NavLink} from 'react-router-dom'
import {Menu, Button} from 'semantic-ui-react'
import {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import { withAuth } from '@okta/okta-react';
import { useAuth } from '../../src/auth';

import Admin from './admin'
import Home from './home'
import User from './user'

const NavBar = withAuth(({ auth }) => {
    const [authenticated, user] = useAuth(auth);
    if (user) {
        console.log(user)
      }  
    
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
            <Menu.Item>
                {authenticated !== null && (<Button onClick={() => authenticated ? auth.logout() : auth.login()} className="App-link"> Log {authenticated ? 'out' : 'in'} </Button> )}
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
    

});

export default NavBar;
