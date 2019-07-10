import React from 'react'
import {Component} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'


class CreateRaceForm extends Component{
    render(){
        return(
<div>
    <Form>
        <Form.Field>
        <label>Race Name </label>
        <input name="raceName" type="Text"/>
        </Form.Field>
        
        <Form.Field>
        <label>Natural Armor </label>
        <input name="natArmor" type="Number"/>
        </Form.Field>
        
        <Form.Field>
        <label>Health </label>
        <input name="raceName" type="Number"/>
        </Form.Field>
        
        <Form.Field>
        <label>Size </label>
        <select name="raceSize">
            <option value="small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>
        </Form.Field>
        
        <Form.Field>
        <label>Vision</label>
        <input name="raceVision" type="Text"/>
        </Form.Field>
        
        <Form.Field>
        <label>Speed</label>
        <input name="raceSpeed" type="Number"/>
        </Form.Field>
        
        <Form.Field>
        <label>Cyber Enhancement Slots</label>
        <input name="raceCES" type="Number"/>
        </Form.Field>
        
        <Form.Field>
        <label>Preferred Classes</label>
        <input name="racePC" type="Text"/>
        </Form.Field>
        
        <Form.Field>
        <label>Languages </label>
        <input name="raceLanguages" type="Text"/>
        </Form.Field>
        
        <Form.Field>
        <label>Religions</label>
        <input name="raceReligion" type="Text"/>
        </Form.Field>
        
        <Form.Field>
        <label>Race Specific Bonus Name</label>
        <input type="Text" name="raceBonusName"/>
        </Form.Field>
        
        <Form.Field>
        <label> Race Specific Bonus Amount</label>
        <input type="Number" name="raceBonusAmount"/>
        </Form.Field>

        <Form.Field>
        <label> Race Bonus Stat</label>
        <select name="raceBonusStat">Stat
            <option value="int">int</option>
        </select>
        </Form.Field>


        
        <Form.Field>
        <label>Purchase Required? </label>
        <Checkbox name="racePurchase"/>
        </Form.Field>
        
        <Button type="submit"> Submit </Button>

    </Form>        
    
</div>
        )
    }
}



export default CreateRaceForm

    