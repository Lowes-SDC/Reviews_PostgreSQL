import React from 'react'
import Bar from './Bar'

const BarRatingsStyle = {
  width:'100%',
  display:'flex',
}
const style = {
  width:'100%'
}
const textStyle = {
  width:'60px',
  paddingLeft:'10px',
}
const barSTyle = {
  width:'200px'
}



const BarRatings = (props) =>  {
  // get percents
  return (
      <div style={style}>
        <div style={BarRatingsStyle}><div style={textStyle} >5 Stars</div><div style={barSTyle}> <Bar percent={props.percents.five}/></div><div style={textStyle}>{props.rating.five_stars}</div></div>
        <div style={BarRatingsStyle}><div style={textStyle}>4 Stars</div><div  style={barSTyle}> <Bar percent={props.percents.four}/></div><div style={textStyle}>{props.rating.four_stars}</div></div>
        <div style={BarRatingsStyle}><div style={textStyle}>3 Stars</div><div style={barSTyle}> <Bar percent={props.percents.three}/></div><div style={textStyle}>{props.rating.three_stars}</div></div>
        <div style={BarRatingsStyle}><div style={textStyle}>2 Stars</div><div style={barSTyle}> <Bar percent={props.percents.two}/></div><div style={textStyle}>{props.rating.two_stars}</div></div>
        <div style={BarRatingsStyle}><div style={textStyle}>1 Star </div><div style={barSTyle}>  <Bar percent={props.percents.one}/></div><div style={textStyle}>{props.rating.one_star}</div></div>
        
      </div>
    )
}

export default BarRatings