import React from 'react'

export class CharacterStats extends React.Component{
    statArray = [-4,-4,-4,-4,-2,-2,-2,-1,-1,-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
 
    adjust(stat){
    return statArray[stat];
    }
    
    mainStats=
        [
            {str : Number},
            {dex : Number}, 
            {con : Number}, 
            {int : Number}, 
            {wis : Number}, 
            {cha : Number},
        ]
   
    mainStatsMod = 
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