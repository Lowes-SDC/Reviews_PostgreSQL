import React, {Component} from 'react'

 const buttonStyle = {
  cursor:'pointer',
  border:'1px solid #CCC',
  backgroundColor: '#fff',
  horizontalPaddinfg:'',
  color:'#0471AF',
  borderRadius:0,
  fontSize:'1rem',
  fontWeight:'400',
  fontFamily: 'Helvetica,Arial,sans-serif',
  padding:'0 15px',
  minHeight:'44px',
  maxHeight:'44px',
  lineHeight:'44px',
  textAlign:'center',
  verticalAlign:'middle',



 }

const WriteReview = (props) => {

    return(
    <div>
      <button onClick={e => {
        props.show();
      }} style={buttonStyle}>WRITE A REVIEW</button>
    </div>
    )

}

export default WriteReview