import React from 'react'
import Stars from './Stars'


const Review = (props) => {
    
    return(
        <div>
            <div>{props.data.title}</div>
            <Stars starsGiven={props.data.starsGiven}/>
            <div>{props.data.detailed}</div>
        </div>

    )
}

export default Review;