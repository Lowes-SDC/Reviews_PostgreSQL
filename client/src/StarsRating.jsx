import React from 'react'


const StarsRating = (props) => {

  let stars = Math.floor(props.stars)
  console.log('stars' +stars)
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