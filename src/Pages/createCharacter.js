import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import characterService from '../utils/characterService'
class CreateC extends Component{

    state = {
        name: "",
        gender: "",

    }

    handleChange = (e) => {
         
        this.setState({

          [e.target.name]: e.target.value
        });
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
        return(
            <React.Fragment>
    <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <label>Character Name</label>
            <input onChange={this.handleChange} type="text" name="name" />
        </Form.Field>
        <Form.Field>
            <label>Race</label>
            <select>
                
            </select>
        </Form.Field>
        <Form.Field>
            <label>Class</label>
            <select>
                
            </select>
        </Form.Field>
        <Form.Field>
            <label>Gender</label>
            <input type="text" name="gender" onChange={this.handleChange} />
        </Form.Field>

            <Button type="submit"/>



    </Form>
            </React.Fragment>
        )
    }
}

export default CreateC;
