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

const aboutYouStyle = {
  color: '#999! important',
  backgroundColor: '#F2F2F2',
  padding:'20px',
  fontWeight:'700',
  fontSize:'14px',
}

const textBoxStyle = {
  height:'44px',
  fontSize:'1rem',
  backgroundColor:'#FFF',
  backgroundImage:'none',
  border:'1px solid #CCC',
  boxSizing:'border-box',
  padding:'0 0 0 10px',
  width: '100%'
}

const ratingDiv = {
  paddingRight:'10px'
}

const selectStyle = {
  fontFamily: 'Helvetica,Arial,sans-serif',
  width:'80%',
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
  paddingTop:'5px',
  paddingRight:'20px',
  paddingBottom:'5px',
  fontWeight:'700',
  fontSize:'14px',
}
const mainContainer = {
  padding:'20px',
  fontFamily: 'Helvetica,Arial,sans-serif',
}

const titleStyle = {
  padding:'20px',
  width:'100%',
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
        <div style={subtitle}> Review Title </div>
        <input style={textBoxStyle} type ='text' id='review_title'/>
      </div>
      <div>
        <div style={subtitle} > Detailed Review</div>
        <textarea style={textBoxStyle} id='detailed_review'></textarea>
      </div>
      <div style={aboutYouStyle}>
        About you
        <div style={formText} >
          <div >Your Nickname</div>
          <input style={textBoxStyle} type="text" id='nickname'/>
          <div htmlFor="email">Your Email Address</div>
          <input style={textBoxStyle} type="text" id="email"/>
        </div >
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