import React, {Component} from 'react'
import StarsRating from './StarsRating'
import BarRatings from './BarRatings'
import axios from 'axios'

const ratingStyle = {
    width:'100%'
}


class Ratings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: {}
    }
  }

  componentDidUpdate() {
    // get rating for current product
    console.log('Ratings ComponentDidMount()' +this.props.productId)
    axios.get('/api/productrating', {
      params: {
        id: this.props.productId
      }
    })
    .then(response => {
      this.setState({
        rating:response.data
      })
    })

  }

  render() {
    return(
      <div style={ratingStyle}>
            <StarsRating />
            <BarRatings />
      </div>
    )
  }
}
export default Ratings