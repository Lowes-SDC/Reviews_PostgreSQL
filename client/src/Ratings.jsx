import React, {Component} from 'react'
import StarsRating from './StarsRating'
import BarRatings from './BarRatings'
import axios from 'axios'

const ratingStyle = {
    width:'100%',
    display:'flex',
    flexDirection:'row'
    

}


class Ratings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: {},
      starAverage: 0,
      percents: {}
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
          stars: this.calculateStarAverage(result),
          percents: this.calculatePercents(result)
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
  calculatePercents(rating) {
    var percents = {}
    percents.one = Math.floor(rating.one_star/rating.totalVotes * 100);
    percents.two = Math.floor(rating.two_stars/rating.totalVotes * 100);
    percents.three = Math.floor(rating.three_stars/rating.totalVotes * 100);
    percents.four = Math.floor(rating.four_stars/rating.totalVotes * 100);
    percents.five = Math.floor(rating.five_stars/rating.totalVotes * 100);
    return percents;
  }

  render() {
    return(
      <div style={ratingStyle}>
        <div>
            <StarsRating stars={this.state.stars} totalVotes={this.state.rating.totalVotes}/>
          </div>
          <div>
            <BarRatings rating={this.state.rating} percents={this.state.percents}/>
          </div>
      </div>
    )
  }
}
export default Ratings