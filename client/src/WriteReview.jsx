import React, {Component} from 'react'
import buttonStyle from './ButtonStyle'


const WriteReview = (props) => {

    return(
    <div>
      <button onClick={e => {
        props.show(true);
      }} style={buttonStyle}>WRITE A REVIEW</button>
    </div>
    )

}

export default WriteReview