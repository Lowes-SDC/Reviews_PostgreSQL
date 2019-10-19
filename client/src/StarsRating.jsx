import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';



const StarsRatingStyle = {
  width:'100%',
  fontFamily:'Helvetica,Arial,sans-serif',
  fontSize:'14px',
  verticalAlign: 'middle',
}

const StarsRating = (props) => {

  let stars = Math.floor(props.stars);
  let remainder = Number(props.stars%1);
  let divs = [];

  for (let i =0 ; i< stars; i++) {
    divs.push(<StarIcon key={i}/>)
  }
  if (remainder > 0.2 && remainder < 0.8) {
    divs.push(<StarHalfIcon key={6}/>)
  }
  if (remainder > 0.8) {
    divs.push(<StarIcon key={6}/>)
  }

  return (
    <div style={StarsRatingStyle}>
      <div>
       {props.totalVotes} Ratings
        <div>
          {divs}
        </div>
      {props.stars} average
      </div>
    </div>
  )
}

export default StarsRating;