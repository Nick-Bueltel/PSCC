import React from 'react'

class CharacterStats extends React.Component{
   mainStats = {
        str : 0,
        dex : 0, 
        con : 0, 
        int : 0, 
        wis : 0, 
        cha : 0, 
        }
    
    mainStatMods = {
        str : -4,
        dex : -4, 
        con : -4, 
        int : -4, 
        wis : -4, 
        cha : -4, 
    }

    if(this.mainStats >= 3){
        this.mainStatMods = - 2 
    } 

}