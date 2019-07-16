import React, {Component} from 'react'
import { Button, } from 'semantic-ui-react'
import searchChar from '../utils/characterService'


class ShowC extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          hits: [],
        };
      }
    
      componentDidMount() {
        console.log(this.props.email)
        searchChar.searchChar(this.props.email)
        .then(data =>{ 
            console.log(data)
            this.setState({ hits: [data] })}).catch(error => console.error(error))
      }
    render(){
      return(
          <React.Fragment>
              {this.state.hits.map(hit =>
          <div class="ui container">
          <div class="ui two column grid">
            <div class="column">

          <h3 key="name" class="top attached ui segment">Character Name: {hit.name}</h3>
          <h3 key="gender" class="attached ui segment">Gender: {hit.gender}</h3>
          <h3 key="user" class="attached ui segment">User: {hit.user}</h3> 
          <h3 key="race" class="attached ui segment">Race: {hit.race}</h3> 
          <h3 key="class" class="bottom attached ui segment">Class: {hit.class}</h3> 
            </div>
            <div class="column">

          <h3 key="str" class="top attached ui segment">STR: {hit.str}</h3> 
          <h3 key="dex" class="attached ui segment">DEX: {hit.dex}</h3> 
          <h3 key="con" class =" attached ui segment">CON: {hit.con}</h3> 
          <h3 key="int" class="attached ui segment">INT: {hit.int}</h3> 
          <h3 key="wis" class="attached ui segment">WIS: {hit.wis}</h3> 
          <h3 key="cha" class="bottom attached ui segment">CHA: {hit.cha}</h3> 
            </div>
          <div class="ui one column grid">
          <div class="column">

          <h3 class="top attached ui segment" key="abilities">Abilities </h3> 
          <p class="bottom attached ui segment"> {hit.abilities}</p>
          </div>
          </div>
          </div>
          </div>
          )}
            <Button href="/deleteChar">Delete</Button>
          </React.Fragment>
        
    )
      }
}

export default ShowC