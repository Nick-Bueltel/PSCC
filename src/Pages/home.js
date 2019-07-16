import React, {Component} from 'react'


class Home extends Component{
    render(){
        return(
            <div>
                <h1>Primus Star Character Creator - Alpha 1</h1>
                <h3><a href="https://www.drivethrurpg.com/product/236164/Primus-Star-Core-Rulebook-1st-Edition">Buy the book here!</a></h3>
                <p>Hey everyone, thank you for checking out the PSCC Alpha, the site is not quite ready for actual character sheet use, and more of a proof of concept, there are a lot of areas of the site that need a "bit" of touching up before they are good to go.</p>
                <p>So far, we have the backend Admin stuff working, We can create and edit Races, and classes on our end. All that is left is for us to impliment a way for you to actually select and use those races and classes and for those bonuses etc to apply to your character. For now you need to do the math on your own. </p>
                <p>Feel free to use the site in the meantime, however your characters may be wiped occasionally in order to adjust to new models being implimented in the backend code. </p>
                <p>In the near future, the site will be refactored into another web-framework, currently it is on react. However we are looking into moving it into a Django framework to improve the capabilities of our MongoDB routes.</p>
                
            </div>
        )
    }
}

export default Home
