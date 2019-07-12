
import React from 'react'
import {Component} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
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
    proficiency1 : false,
    subClass1 : {},
    subClass2 : {},
    abilities : {},
    purchaseRQ : false,
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
        <label>test</label>
        <Checkbox name="proficiency1" onChange={this.handleChange}/>
    </Form.Field>
    
    <Form.Field>
        <label>Abilities</label>


    </Form.Field>

    <Form.Field>
        <label>Sub Class 1 Name</label>
        <input name="subClass1" type="Text" onChange={this.handleChange}/>
    </Form.Field>
        <Form.Field>
            <label> Sub Class  1 Description </label>
            <input name='subClass1.subDescription' type="Text" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
            <label> Sub Class  1 Ability </label>
            <input name='subClass1.subDescription' type="Text" onChange={this.handleChange} />
        </Form.Field>
    


    {/* <Form.Field>
        <label>Sub Class 1 Name</label>
        <input name="subClass1" type="Text" onChange={this.handleChange}/>
    </Form.Field> */}
    
    <Button type="submit"> Submit </Button>



</Form>    
</div>
        )
    }
}



export default CreateClassForm

    