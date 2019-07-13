
import React from 'react'
import {Component} from 'react'
import {Button, Form, TextArea} from 'semantic-ui-react'
import classService from '../../utils/classService'

class CreateClassForm extends Component{
   state = {
    playerClassName: "",
    ablRecharge1: "",
    ablRecharge2: "",
    startingWealth: "",
    statBonus1 : "",
    statBonus1Amount: null,
    statBonus2 : "",
    statBonus2Amount: null,
    proficies : "",
    ability1 : "",
    ability2 : "",
    ability3 : "",
    ability4 : "",
    ability5 : "",
    ability6 : "",
    ability7 : "",
    ability8 : "",
    ability9 : "",
    ability10 : "",
    ability11 : "",
    ability12 : "",
    ability13 : "",
    ability14 : "",
    ability15 : "",
    
   }
   
   
    handleChange = (e) => {
         
        this.setState({

          [e.target.name]: e.target.value
        });
  }
   
      handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await classService.create(this.state);
 

         this.props.history.push('/');
        } catch (err) {
        }
       }   

    
    render(){
        return(
<div>
<Form onSubmit={this.handleSubmit}>
    <Form.Field>
        <label>Class Name </label>
        <input type="Text" name="playerClassName" onChange={this.handleChange} />
    </Form.Field>
    
    <Form.Field>
        <label>Ability Recharge</label>
        <select name="ablRecharge1" onChange={this.handleChange}>
            <option value="str">str</option>
            <option value="dex">dex</option>
            <option value="con">con</option>
            <option value="int">int</option>
            <option value="wis">wis</option>
            <option value="cha">cha</option>

        </select>
        +
        <select name="ablRecharge2" onChange={this.handleChange}>
            <option value="str">str</option>
            <option value="dex">dex</option>
            <option value="con">con</option>
            <option value="int">int</option>
            <option value="wis">wis</option>
            <option value="cha">cha</option>
        </select>
    </Form.Field>
    
    <Form.Field>
        <label>Starting Wealth</label>
        <input type="Text" name="startingWealth" onChange={this.handleChange}/>
    </Form.Field>
    
    <Form.Field>
        <label> Stat Bonus 1</label>
        <select name="statBonus1" onChange={this.handleChange}>
            <option value="str">str</option>
            <option value="dex">dex</option>
            <option value="con">con</option>
            <option value="int">int</option>
            <option value="wis">wis</option>
            <option value="cha">cha</option>
        </select>
    </Form.Field>
    
    <Form.Field>
        <label> Stats Bonus 1 Amount</label>
        <input name="statBonus1Amount" type="Number" onChange={this.handleChange} />
    </Form.Field>
    
    <Form.Field>
        <label> Stat Bonus 2</label>
        <select name="statBonus2" onChange={this.handleChange}>
            <option value="str">str</option>
            <option value="dex">dex</option>
            <option value="con">con</option>
            <option value="int">int</option>
            <option value="wis">wis</option>
            <option value="cha">cha</option>
        </select>
    </Form.Field>
    
    <Form.Field>
        <label> Stats Bonus 2 Amount</label>
        <input name="statBonus2Amount" type="Number" onChange={this.handleChange}/>
    </Form.Field>
    
    <Form.Field>
        <label>Proficiencies </label>

        <TextArea name="proficiency1" onChange={this.handleChange}/>
    </Form.Field>
    



        <label>Abilities</label>
    <Form.Field>
        <TextArea type="Text-Area" name="ability1" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability2" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability3" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability4" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability5" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability6" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability7" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability8" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability9" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability10" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability11" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability12" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability13" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability14" onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
        <TextArea type="Text" name="ability15" onChange={this.handleChange} />
    </Form.Field>




    
    <Button type="submit"> Submit </Button>



</Form>    
</div>
        )
    }
}



export default CreateClassForm

    