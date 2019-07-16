import React, {Component} from 'react'
import { Button } from 'semantic-ui-react';
import CreateC from './createCharacter'
import ShowC from './showC'


class User extends Component{
    state = {
        display : false,
        display1 : false,


    }
    
    showCC = () => {
        this.state.display === false ? this.setState({display: true}) : this.setState({display : false})
    }
    showCC2 = () => {
        this.state.display1 === false ? this.setState({display1: true}) : this.setState({display1 : false})
    }
    
    
    render(){
        console.log(this.props)
        return(
            <React.Fragment>

                <Button onClick={this.showCC}> Create A Character</Button>
                <Button onClick={this.showCC2}> look at your characters</Button>
                <div className="characterForm"> 
                { this.state.display ? <CreateC email={this.props.email}/> : null }
                </div>    
                <div className="displayForm">
                { this.state.display1 ? <ShowC email={this.props.email} /> : null }

                </div>
                
            </React.Fragment>
        )
    }
}

export default User
