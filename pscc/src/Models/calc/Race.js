import mongoose from 'mongoose'
import React from 'react'

const CreateRaceForm = () => (


    <form>
        <label>
            Race Name <input name="raceName" type={Text}/>
        </label>
        <label>
            Natural Armor <input name="narmor" type={Number}/>
        </label>
        <label>
            Health (no con mod) <input name="health" type={Number} />
        </label>
        <label>
            Size <input name="size" type={Text} /> 
        </label>
        <label>
            Vision <input name="vision" type={Text} />
        </label>
        <label>
            speed <input name="speed" type={Number} />
        </label>
        <label>
            Cyber Enhancement Slots<input name="ces" type={Number} />
        </label>
        <label>
            Preferred Classes <input name="preferredClasses" type={Text} />
        </label>
        <label>
            Language <input name="languageOptions" type={Text} />
        </label>
        <label>
            Religion <input name="religionOptions" type={Text} />
        </label>
        <label>
            Racial Bonus Name (if any) <input name="racialBonusName" type={Text} /> 
        </label>
        <label>
            Racial Bonus amount (if any) <input name="racialBonusAmount" type={Number} /> 
        </label>
        <label>
            Racial Bonus stat (if any) 
            <select name="racialBonusStat">
                <option name="int">int</option>
                <option name="str">str</option>
            </select> 
        </label>
    </form>

    
)


    