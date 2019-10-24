import React, {Component} from 'react'
import StarsRating from './StarsRating'
import BarRatings from './BarRatings'
import axios from 'axios'
import Recommendations  from './Recommendations'
import WriteReview from './WriteReview'
import Drawer from '@material-ui/core/drawer'
import RateForm from './RateForm'

const ratingStyle = {
    width:'100%',
    display:'flex',
    flexDirection:'row',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
}

const StarsContainerStyle = {
  paddingTop: '40px',
  verticalAlign:'middle',
  flexGrow:'1',
  textAlign:'center',
}
const RatingsContainerStyle = {
  paddingTop: '10px',
  fontFamily:'Helvetica,Arial,sans-serif',
  fontSize:'14px',
  flexGrow:'1',
  textAlign:'center',
  backgroundColor:'#eaeaea'

}

const BarRatingsStyle = {
  paddingTop: '30px',
  fontFamily:'Helvetica,Arial,sans-serif',
  fontSize:'14px',
  flexGrow:'1',
  paddingBottom: '20px',
}

const ReviewsStyle = {
  paddingTop: '40px',
  flexGrow:'1',
}

class Ratings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: {},
      starAverage: 0,
      percents: {},
      drawerOpen:false,
      reviews:0
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer(open) {
    this.setState({drawerOpen:open})
  }

  componentDidUpdate(prevProps) {
    // get rating for current product
    if (this.props.product !== prevProps.product) {
      axios.get('/api/productrating', {
        params: {
          id: this.props.product.id
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
      <div>
        Rating Summary {this.state.reviews}
        <div style={ratingStyle}>
          <div style={RatingsContainerStyle}>
            <Recommendations />
          </div>
          <div style={StarsContainerStyle}>
              <StarsRating stars={this.state.stars} totalVotes={this.state.rating.totalVotes}/>
          </div>
          <div style={BarRatingsStyle}>
              <BarRatings rating={this.state.rating} percents={this.state.percents}/>
          </div>
          <div style={ReviewsStyle}>
            <WriteReview show={this.toggleDrawer} />
          </div>
          <Drawer anchor='bottom' open={this.state.drawerOpen} >
            <div>
              <RateForm product={this.props.product} close={this.toggleDrawer}/>
            </div>
          </Drawer>
        </div>
      </div>
    )
  }
}
export default Ratings