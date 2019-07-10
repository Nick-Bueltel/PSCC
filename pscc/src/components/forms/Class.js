
import React from 'react'
import {Component} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'

class CreateClassForm extends Component{
    render(){
        return(
<div>
<Form>
    <Form.Field>
        <label>Class Name </label>
        <input type="Text" name="playerClassName" />
    </Form.Field>
    
    <Form.Field>
        <label>Ability Recharge</label>
        <select name="ablRecharge1">
            <option value="str">str</option>
            <option value="dex">dex</option>
            <option value="con">con</option>
            <option value="int">int</option>
            <option value="wis">wis</option>
            <option value="cha">cha</option>

        </select>
        +
        <select name="ablRecharge2">
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
        <input type="Text" name="startingWealth" />
    </Form.Field>
    
    <Form.Field>
        <label> Stat Bonus 1</label>
        <select name="statBonus1">
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
        <input name="statBonus1Amount" type="Number" />
    </Form.Field>
    
    <Form.Field>
        <label> Stat Bonus 2</label>
        <select name="statBonus2">
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
        <input name="statBonus2Amount" type="Number" />
    </Form.Field>
    
    <Form.Field>
        <label>Proficiencies </label>
        <label>test</label>
        <Checkbox name="proficiency1" ></Checkbox>
    </Form.Field>
    
    <Form.Field>
        <label>Abilities</label>


    </Form.Field>

    <Form.Field>
        <label>Purchase Required?</label>
        <Checkbox name="purchaseRQ"></Checkbox>
    </Form.Field>
    
    <Button type="submit"> Submit </Button>



</Form>    
</div>
        )
    }
}



export default CreateClassForm

    