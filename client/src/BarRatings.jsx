import React from 'react'
import Bar from './Bar'

const BarRatingsStyle = {
  width:'100%',
  display:'flex',
}
const style = {
  width:'100%'
}

const BarRatings = (props) =>  {
  // get percents
  return (
      <div style={style}>
        <div style={BarRatingsStyle}>5 Stars <Bar percent={props.percents.five}/>{props.rating.five_stars}</div>
        <div style={BarRatingsStyle}>4 Stars <Bar percent={props.percents.four}/>{props.rating.four_stars}</div>
        <div style={BarRatingsStyle}>3 Stars <Bar percent={props.percents.three}/>{props.rating.three_stars}</div>
        <div style={BarRatingsStyle}>2 Stars <Bar percent={props.percents.two}/>{props.rating.two_stars}</div>
        <div style={BarRatingsStyle}>1 Stars <Bar percent={props.percents.one}/>{props.rating.one_star}</div>
      </div>
    )
}

export default BarRatings