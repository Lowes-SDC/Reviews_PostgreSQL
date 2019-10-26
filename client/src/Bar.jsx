import React from 'react'

const backgroundStyle = {
  background: '#c3c3c3',
  width: '100%',
  height: '15px'
}



const Bar = (props) => {

  let foregroundStyle = {
    background: '#004990',
    width: '0%',
    height: '15px'
  }

  if (props.percent !== 0) {
    let width = Number(props.percent);
    foregroundStyle.width = width+'%';
  }
  return (
    <div style={backgroundStyle} >
      <div style={foregroundStyle}></div>
    </div>
  )
}

export default Bar;