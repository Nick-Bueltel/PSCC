import React from 'react';

import {Component} from 'react'

import CreateRaceForm from '../components/forms/Race';
import CreateClassForm from '../components/forms/Class'

class Admin extends Component{


    
    render(){
        return(      
<React.Fragment>
            <h1>Admin Panel</h1>
            <h2>Race Form</h2>
            <div className="raceForm">
                <CreateRaceForm/>
            </div>
            <h2>Class Form</h2>
            <div className="classForm">
                <CreateClassForm/>
            </div>

</React.Fragment>

        )
    }
}

export default Admin
