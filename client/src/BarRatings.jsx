import React from 'react'
import Bar from './Bar'

const BarRatingsStyle = {
  width:'100%',
  display:'flex',
}

const BarRatings = (props) =>  {
  return (
      <div >
        <div style={BarRatingsStyle}>5 Stars <Bar percent='20'/>2</div>
        <div style={BarRatingsStyle}>4 Stars <Bar percent='43' />0</div>
        <div style={BarRatingsStyle}>3 Stars <Bar percent='18' />0</div>
        <div style={BarRatingsStyle}>2 Stars <Bar percent='13' />0</div>
        <div style={BarRatingsStyle}>1 Stars <Bar percent='6' />0</div>
      </div>
    )
}

export default BarRatings