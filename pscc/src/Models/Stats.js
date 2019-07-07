import React from 'react'

export class CharacterStats extends React.Component{
    adjust(stat){
       switch(stat){
        case 1:
           if(stat == [1,2,3]){
               modifier = -4
           }
           break;
        case 2:
           if(stat == [4,5,6]){
               modifier = -2
           }
           break;
        case 3:
           if(stat == [7,8,9]){
               modifier = -1
           }
           break;
        case 4:
           if(stat == [10,11]){
               modifier = 0
           }
           break;
        case 5:
           if(stat == [12,13]){
               modifier = 1
           }
           break;
        case 6:
           if(stat == [14,15]){
               modifier = 2
           }
           break;
        case 7:
           if(stat == [16,17]){
               modifier = 3
           }
           break;
        case 8:
           if(stat == [18,19]){
               modifier = 4
           }
           break;
        case 9:
           if(stat == [20,21]){
               modifier = 5
           }
           break;
        case 10:
            if(stat == [22,23]){
                modifier = 6
            }
            break;
        case 11:
            if(stat == [24,25]){
                modifier = 7
            }
            break;
        case 12:
            if(stat == [26,27]){
                modifier = 8
            }
            break;
        case 12:
            if(stat == [28,29]){
                modifier = 9
            }
            break;
        case 12:
            if(stat == [30,31]){
                modifier = 10
            }
            break;
        }
        return modifier
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
    //this array holds objects related to the characters main stats. this array will be generated based on the values inputed in the form. TODO - figure out the algorithm needed to generate the modifier values based on the inputed value. TODO - also create a way to have the stats randomly rolled for you    
        [
            {str : (this.adjust(this.mainStats.str))},
            {dex : (this.adjust(this.mainStats.dex))}, 
            {con : (this.adjust(this.mainStats.con))}, 
            {int : (this.adjust(this.mainStats.int))}, 
            {wis : (this.adjust(this.mainStats.wis))}, 
            {cha : (this.adjust(this.mainStats.cha))},
        ]
    
    auxStats = 
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