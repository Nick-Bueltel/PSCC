import React, {Component} from 'react'
import { Button } from 'semantic-ui-react';
import CreateC from './createCharacter'


class User extends Component{
    state = {
        display : false,

    }
    
    showCC = () => {
        this.state.display === false ? this.setState({display: true}) : this.setState({display : false})
    }
    
    
    render(){
        return(
            <React.Fragment>

                <Button onClick={this.showCC}> Create A Character</Button>
                <div className="characterForm"> 
                {this.state.display ? <CreateC/> : null  }
                </div>    
            </React.Fragment>
        )
    }
}

export default User
