import React from 'react'
const formStyle = {
  padding:'20px',
  fontFamily: 'Helvetica,Arial,sans-serif',
  display:'grid',
  gridTemplateColumn:'200px Auto',
  gridTemplateRow:'200px Auto'
 
}
const topContainer = {
  display:'block',
}

const RateForm = (props) => {
    return (
    <div style={formStyle}>
      <h1>Write a Review</h1>
      <div style={topContainer}>
        <div >
          <img src={props.product.url} width='190px' />
            {props.product.name}
          </div>
          <div>
          <label for='rating'>Overall Rating*</label>
          <select id="ratingSelector">
            <option value='0'>Select Rating</option>
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </div>
        <div>
          Would you recommend this product to a friend?
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
      <div>
        <label for='review_title'> Review Title </label><input type ='text' id='review_title'/>
      </div>
      <div>
        <label for='detailed_review'>Detailed Review</label>
        <textarea id='detailed_review'></textarea>
      </div>
      <div>
        About you
        <div>
          <label for='nickname'>Your Nickname</label>
          <input type="text" id='nickname'/>
          <label for="email">Your Email Address</label>
          <input type="text" id="email"/>
        </div>
        <div>
          <label for='purchase_date'>Purchase Date</label>
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
        <button
        onClick = {e => {
          props.close(false);
        }}
        >
          Cancel</button>
        <button
        >SUBMIT YOUR REVIEW</button>
      </div>
    </div>

    )


}

export default RateForm