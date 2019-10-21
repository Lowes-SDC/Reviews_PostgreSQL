import React from 'react'
import buttonStyle from './ButtonStyle'

const formStyle = {
  padding:'20px',
  fontFamily: 'Helvetica,Arial,sans-serif',
  display:'flex',
  
}
const formText = {
  display:'block',
  fontSize:'14px',
 
}
const picture = {
  
 
}

const ratingDiv = {
  width:'100%',
  paddingRight:'10px'
}
const selectStyle = {
  fontFamily: 'Helvetica,Arial,sans-serif',
  width:'100%',
  height:'44px',
  backgroundColor:'#FFF',
  border: '1px solid #CCC',
  borderRadius: '0',
  boxSizing:'border-box',
  backgroundImage:'none',
  padding: '0 0 0 10px',
  color:'#000'
}

const divColumn = {
  width:'100%',
  flexGrow: '1'
}
const mainTitle = {
  fontFamily: 'Helvetica,Arial,sans-serif',
  fontWeight: '400'
}

const subtitle = {
  paddingRight:'20px',
  paddingBottom:'10px',
}
const mainContainer = {
  padding:'20px',
  fontFamily: 'Helvetica,Arial,sans-serif',
}

const titleStyle = {
  padding:'20px',
  fontSize: '1.6rem'
}
const reviewDiv = {
  paddingTop:'20px',
  display:'flex',
  flexDirection:'row',
  fontSize:'14px',
  fontWeight:'700',
  marginBottom: '5px',
  width:'100%'
  
}
const RateForm = (props) => {
    return (
    <div style={mainContainer}>
     <div style={mainTitle}>Write a Review</div>
      <div style={formStyle}>
        <div style={picture}>
          <img src={props.product.url} width='190px' />
        </div>
        <div style={titleStyle} >
            {props.product.name}
          <div style={reviewDiv}>
            <div style={divColumn}>
              <div style={subtitle}>Overall Rating*</div>
              <div style={ratingDiv} >
                <select id="ratingSelector" style={selectStyle}>
                  <option value='0'>Select Rating</option>
                  <option value='1'>1 Star</option>
                  <option value='2'>2 Stars</option>
                  <option value='3'>3 Stars</option>
                  <option value='4'>4 Stars</option>
                  <option value='5'>5 Stars</option>
                </select>
              </div>
            </div>
              <div style={divColumn}>
                <div style={subtitle}> Would you recommend this product to a friend?</div>
                <button style={buttonStyle}>Yes</button>
                  &nbsp;
                <button style={buttonStyle}>No</button>
              </div >
          </div>
        </div>
      </div>
      <div style={formText}>
        <label htmlFor='review_title'> Review Title </label>
        <input type ='text' id='review_title'/>
      </div>
      <div>
        <label htmlFor='detailed_review'>Detailed Review</label>
        <textarea id='detailed_review'></textarea>
      </div>
      <div>
        About you
        <div>
          <label htmlFor='nickname'>Your Nickname</label>
          <input type="text" id='nickname'/>
          <label htmlFor="email">Your Email Address</label>
          <input type="text" id="email"/>
        </div>
        <div>
          <label htmlFor='purchase_date'>Purchase Date</label>
          <select id='purchase_date'>
            <option value='0'></option>
            <option value='1'>within last month</option>
            <option value='2'>1-3 months ago</option>
            <option value='3'>3-6 months ago</option>
            <option value='4'>6-12 months ago</option>
            <option value='5'>over 1 year ago</option>
          </select>
        </div>
      </div>
      <div>
        <button style={buttonStyle}
        onClick = {e => {
          props.close(false);
        }}
        >
          Cancel</button> &nbsp;
        <button style={buttonStyle}
        >SUBMIT YOUR REVIEW</button>
      </div>
    </div>

    )


}

export default RateForm