import React, {Component} from 'react'
import {Form, Button, TextArea} from 'semantic-ui-react'
import characterService from '../utils/characterService'




class CreateC extends Component{
    
    
    
    state = {
        user : `${this.props.email}`,
        name: "",
        gender: "",
        race : "human",
        class : "rogue",
        str : null,
        dex : null,
        con : null,
        int : null,
        wis : null,
        cha : null,
        abilities: "",



        
    }
    
    handleChange = (e) => {
         
        this.setState({

          [e.target.name]: e.target.value
        });
        console.log(`target state changed to ${e.target.value}`)
        
        
  }
   
      handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await characterService.create(this.state);
 

         this.props.history.push('/');
        } catch (err) {
        }
       }   

    
    
    
    render(){
        console.log(this.props)
        return(
            <React.Fragment >
    <div class="ui container">

    <Form onSubmit={this.handleSubmit}>
        <div class="ui two column grid">
            <div class="column">
            <h3 class="top attached ui segment">User Name</h3>
            <h3 class="attached ui segment">Character Name</h3>
            <h3 class="attached ui segment">Race</h3>
            <h3 class="attached ui segment">Class</h3>
            <h3 class="attached ui segment">Gender</h3>
            </div>
        <div class="column">

        <Form.Field class="top attached ui segment">
            <input name="user" onChange={this.handleChange} defaultValue={this.props.email} disabled={true}></input>
        </Form.Field>
        <Form.Field class="attached ui segment">
            <input onChange={this.handleChange} type="text" name="name" />
        </Form.Field>
        <Form.Field class="attached ui segment">
            <select name="race" onChange={this.handleChange} >
                <option value="human">Human</option>
                <option value="ferdisian">Ferdisian</option>
            </select>
        </Form.Field>
        <Form.Field class="attached ui segment">
            <select name="class"onChange={this.handleChange}>
                <option value="rogue">Rogue</option>
                <option value="biotic">Biotic</option>     
            </select>
        </Form.Field>
        <Form.Field class="bottom attached ui segment">
            <input type="text" name="gender" onChange={this.handleChange} />
        </Form.Field>
        </div>
        </div>

    <div class="column">
        <div class="ui two column grid">
        <div class="column">
            <h3 class="top attached ui segment">STR</h3>
            <h3 class="attached ui segment">DEX</h3>
            <h3 class="attached ui segment">CON</h3>
            <h3 class="attached ui segment">INT</h3>
            <h3 class="attached ui segment">WIS</h3>
            <h3 class="bottom attached ui segment">CHA</h3>

        
        </div>
        <div class="column">

        <Form.Field class="top attached ui segment">
            <input type="number" name="str" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field class="attached ui segment">
            <input type="number" name="dex" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field class="attached ui segment">
            <input type="number" name="con" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field class="attached ui segment">
            <input type="number" name="int" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field class="attached ui segment">
            <input type="number" name="wis" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field class="attached ui segment">
            <input type="number" name="cha" onChange={this.handleChange} />
        </Form.Field>
        </div>
        </div>
    </div>
        
        
        
        <Form.Field>
            <label>Abilities</label>
            <TextArea name="abilities" onChange={this.handleChange} />
        </Form.Field>
      
        

            <Button type="submit">Submit</Button>



    </Form>
    </div>
            </React.Fragment>
        )
    }
}


export default CreateC;
