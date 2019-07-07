import React from 'react'

export class CharacterStats extends React.Component{
    adjust(stat){
        switch( stat ){
            case 1:
            case 2:
            case 3:
                return -4;
            case 4:
            case 5:
            case 6:
                return -2;
            case 7:
            case 8:
            case 9:
                return -1;
            default:
                return (stat - 10)/2;
        }
    }
    
    mainStats=
    //this array holds the actual ability score stats inputed into the form. the mainStatsMod array needs to have the adjusted values based on the table listed in the primus star rule book it is as follows 
    //score / mod
    //1-3 / -4
    //4-6 / -2
    //7-9 / -1
    //10-11 / 0
    //12-13 / 1
    //14-15 / 2
    //16-17 / 3
    //18-19 / 4
    //20-21 / 5
    //a function called inside of the mainStatsMod array, its probably the best way to ensure that the values can be called dynamically based on the change of the characters stats

        [
            {str : 0},
            {dex : 0}, 
            {con : 0}, 
            {int : 0}, 
            {wis : 0}, 
            {cha : 0},
        ]
   
    mainStatsMod = 
    //this array holds objects related to the characters main stats. this array will be generated based on the values inputed in the form.  TODO - also create a way to have the stats randomly rolled for you    
        [
            {str : (this.adjust(this.mainStats.str))},
            {dex : (this.adjust(this.mainStats.dex))}, 
            {con : (this.adjust(this.mainStats.con))}, 
            {int : (this.adjust(this.mainStats.int))}, 
            {wis : (this.adjust(this.mainStats.wis))}, 
            {cha : (this.adjust(this.mainStats.cha))},
        ]
    
    auxStats = 
    //TODO figure out how to push the form data from race creation into the speed variable.  
        [
            {speed: (null)},
            {baseAttackBonus: (null)}
        ]

    subStats = 
    //TODO a way to add the "misc modifier value listed on the character sheet page(138-139)    
        [
            {fortitude : (this.mainStatsMod.str + this.mainStatsMod.con)},
            {reflex : (this.mainStatsMod.dex + this.mainStatsMod.int)},
            {will : (this.mainStatsMod.wis + this.mainStatsMod.cha)},
            {cmb : (this.subStats.reflex + this.mainStatsMod.str)},
            {cmd : (10 + this.subStats.reflex + this.mainStatsMod.str)}
        ]

    }