import React from 'react'
import StarsRating from './StarsRating'
import BarRatings from './BarRatings'

const ratingStyle = {
    width:'100%'
}

const Ratings = (props) => {
    return(
      <div style={ratingStyle}>
            <StarsRating />
            <BarRatings />
      </div>  
    )
}
export default Ratings