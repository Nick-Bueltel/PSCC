import React from 'react'
import {Button} from 'semantic-ui-react'
import {Component} from 'react'

import CreateRaceForm from '../components/forms/Race'
import CreateClassForm from '../components/forms/Class'

class Admin extends Component{
state = {
    class : false,
    race : false,

}

showClass = () =>{
    this.state.class === false ? this.setState({["class"]: true}) : this.setState({["class"] : false})
}
showRace = () =>{
    this.state.race === false ? this.setState({["race"]: true}) : this.setState({["race"] : false})
}





    
    render(){
        return(      
<React.Fragment>
            <h1>Admin Panel</h1>
            <Button onClick={this.showRace}> Race Form</Button>
            <Button onClick={this.showClass}> Class Form</Button>
            
            <div className="raceForm" >
            {this.state.race ? <CreateRaceForm/> : null}
            </div> 
            
            <div className="classForm">
            {this.state.class ?  <CreateClassForm/> : null}
            </div>

</React.Fragment>

        )
    }
}

export default Admin
