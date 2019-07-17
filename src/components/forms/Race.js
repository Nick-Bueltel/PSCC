import React from 'react'
import {Component} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import raceService from '../../utils/raceService';



class CreateRaceForm extends Component{
    state = {
        raceName : "",
        natArmor : null, 
        raceHealth : null,
        raceSize : "",
        raceVision: "", 
        raceSpeed : null,
        raceCES : null, 
        racePC: "", 
        raceLanguages : "",
        raceReligion : "", 
        raceBonusName : "", 
        raceBonusAmount : null,
        raceBonusStat : "",
        racePurchase : false,
    }
   

    handleChange = (e) => {
         
         this.setState({

           [e.target.name]: e.target.value
         });
   }
    
       handleSubmit = async (e) => {
         e.preventDefault();
         try {
           await raceService.create(this.state);
  
 
          this.props.history.push('/');
         } catch (err) {
         }
        }   

    
    render(){
        return(
<div class="ui container">
    <Form onSubmit={this.handleSubmit} >
        <Form.Field>
        <label>Race Name </label>
        <input name="raceName" type="Text" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Natural Armor </label>
        <input name="natArmor" type="Number" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Health </label>
        <input name="raceHealth" type="Number" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Size </label>
        <select name="raceSize" onChange={this.handleChange}>
            <option value="small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
        </select>
        </Form.Field>
        
        <Form.Field>
        <label>Vision</label>
        <input name="raceVision" type="Text" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Speed</label>
        <input name="raceSpeed" type="Number" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Cyber Enhancement Slots</label>
        <input name="raceCES" type="Number" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Preferred Classes</label>
        <input name="racePC" type="Text" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Languages </label>
        <input name="raceLanguages" type="Text" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Religions</label>
        <input name="raceReligion" type="Text" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label>Race Specific Bonus Name</label>
        <input type="Text" name="raceBonusName" onChange={this.handleChange}/>
        </Form.Field>
        
        <Form.Field>
        <label> Race Specific Bonus Amount</label>
        <input type="Number" name="raceBonusAmount" onChange={this.handleChange}/>
        </Form.Field>

        <Form.Field>
        <label> Race Bonus Stat</label>
        <select name="raceBonusStat" onChange={this.handleChange}>Stat
            <option value="str">str</option>
            <option value="dex">dex</option>
            <option value="con">con</option>
            <option value="int">int</option>
            <option value="wis">wis</option>
            <option value="cha">cha</option>
        </select>
        </Form.Field>


        
        <Form.Field>
        <label>Purchase Required? </label>
        <Checkbox name="racePurchase" onChange={this.handleChange}/>
        </Form.Field>
        
        <Button type="submit"> Submit </Button>

    </Form>        
    
</div>
        )
    }
}



export default CreateRaceForm

    