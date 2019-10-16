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
      rating: {},
      starAverage: 0
    }
  }

  componentDidUpdate(prevProps) {
    // get rating for current product
    if (this.props.productId !== prevProps.productId) {
      axios.get('/api/productrating', {
        params: {
          id: this.props.productId
        }
      })
      .then(response => {
        let result = response.data[0];
        result.totalVotes = result.one_star + result.two_stars + result.three_stars + result.four_stars + result.five_stars;
        this.setState({
          rating:result,
          stars: this.calculateStarAverage(result)
        })
      })
    }

  }
  calculateStarAverage(stars) {
    let weighted = stars.one_star * 1;
    weighted += stars.two_stars * 2;
    weighted += stars.three_stars * 3;
    weighted += stars.four_stars * 4;
    weighted += stars.five_stars * 5;

    var sum = stars.one_star;
    sum += stars.two_stars;
    sum += stars.three_stars;
    sum += stars.four_stars;
    sum += stars.five_stars;
    let avg = weighted/sum;

    return avg.toFixed(2);

  }

  render() {
    return(
      <div style={ratingStyle}>
            <StarsRating stars={this.state.stars} totalVotes={this.state.rating.totalVotes}/>
            <BarRatings rating={this.state.rating}/>
      </div>
    )
  }
}
export default Ratings