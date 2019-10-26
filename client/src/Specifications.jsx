import React from 'react'

const specContainer = {
    width:'100%',
    display:'flex',
    flexDirection:'row',
    fontFamily:'Helvetica,Arial,sans-serif',
    fontSize:'14px',
    lineHeight:'2'
}
const SpecDark = {
    flexGrow:'1',
    backgroundColor:'#E2E2E7',
    fontSize:'14px',
    fontWeight:'700',
    padding:'10px'
}

const SpecWhite = {
    flexGrow:'1',
    fontSize:'14px',
    padding:'10px'
}

const Specifications = (props) => {
    return (
        <div style={specContainer}> 
            <div style={SpecDark}>
             Series Number <br/>
             Ocassion <br/>
             Type<br/>
             Patterns<br/>
             Settings<br/>
             Confirmed Kills<br/>
             Unconfirmed<br/>
             Soul Gatherer<br/>
             Power Source<br/>
            </div>
          
            <div style={SpecWhite}>
            666<br/>
            All ocassions<br/>
            Murder<br/>
            Serial Killer<br/>
            Not Stun<br/>
            Over 100<br/>
            Over 3000<br/>
            No <br/>
            Hand Powered<br/>
            </div>
            <div style={SpecDark}>
            Blood Included<br/>
            Body parts Included<br/>
            Indoor/Outdoor<br/>
            Noisy<br/>
            Terrifying<br/>
            Gruesome<br/>
            Sick<br/>

            </div>
            <div style={SpecWhite}>
                No, must find your own<br/>
                No, find victims<br/>
                Better in dark places<br/>
                Only at the last minute<br/>
                Absolutely<br/>
                Somehow<br/>
                Not to me<br/>
            </div>
        </div>
    )
}

export default Specifications

