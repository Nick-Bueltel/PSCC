import {Component, React} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
require('express')


class CreateCharacterForm extends Component{
    render(){
        return(
<div>
    <Form>
        <Form.Field>
            <label>Character Name</label>
            <input type="text" name="playerCharacterName" />
        </Form.Field>
        <Form.Field>
            <label>Race</label>
            <select>
                {forEach(race in races){
                    <option>{race}</option>
                }}
            </select>
        </Form.Field>
        <Form.Field>
            <label>Class</label>
            <select>
                {forEach(Class in classes){
                    <option>{Class}</option>
                }}
            </select>
        </Form.Field>
        <Form.Field>
            <label>Gender</label>
            <input type="text" name="playerCharacterGender" />
        </Form.Field>




    </Form>
</div>
        )
    }
}