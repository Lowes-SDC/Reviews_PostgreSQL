import React from 'react'
import buttonStyle from './ButtonStyle'
import axios from 'axios'


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

const aboutYouContainer = {
  color: '#999! important',
  backgroundColor: '#F2F2F2',
  padding:'20px',
  fontWeight:'700',
  fontSize:'14px',
 
}

const aboutYouStyle = {
  fontSize:  '1.3rem',
  paddingBottom: '10px',
  fontWeight: '700',
  color: '#333',
  display: 'flex',
  flexDirection:'column'
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

const textAreaStyle = {
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

const emailFormContainer = {
  display:'flex',
  flexDirection:'row',
  width:'100%'
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
const emailForm = {
  width:'100%',
  flexGrow:'2',
}

const purchaseStyle = {
  paddingTop:'5px',
  paddingLeft:'30px',
  width:'100%',
  flexGrow:'1'
}


const submitReview = (id) => {
  console.log("submit Review "+id);
  // check form elements
  // id
  // rating 1 - 5
  // recommended : boolean
  // review title
  // detailed review

  axios.post('/api/productreview',{id:id})
  .then(response => { 
    console.log(response.data);
  })

}

const validateFormInputs = (id) => {
  var obj = {};
  obj.id = id;
  // rating

  return obj;
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
        <textarea rows='6' style={textAreaStyle} id='detailed_review'></textarea>
      </div>
      <div style={aboutYouContainer}>
      <div style={aboutYouStyle}>About you</div>
      <div style={emailFormContainer} >
            <div style={emailForm}>
              <div >Your Nickname*</div>
              <input style={textBoxStyle} type="text" id='nickname'/>
              <div>Your Email Address*</div>
              <input style={textBoxStyle} type="text" id="email"/>
            </div >
       
            <div style={purchaseStyle}>
                  <div>Purchase Date*</div>
                  <select style={selectStyle} id='purchase_date'>
                    <option value='0'></option>
                    <option value='1'>within last month</option>
                    <option value='2'>1-3 months ago</option>
                    <option value='3'>3-6 months ago</option>
                    <option value='4'>6-12 months ago</option>
                    <option value='5'>over 1 year ago</option>
                  </select>
              </div>
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
          onClick={e => {
            submitReview(props.product.id)}}
        >SUBMIT YOUR REVIEW</button>
      </div>
    </div>

    )


}

export default RateForm