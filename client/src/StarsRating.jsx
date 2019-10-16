import React from 'react'

const StarsRating = (props) => {
  return (
    <div>
      <div>
       {props.totalVotes} ratings
        <div>
          &#9733;
          &#9733;
          &#9733;
          &#9733;
          &#9733;
        </div>
      {props.stars} average
      </div>
    </div>
  )
}

export default StarsRating;