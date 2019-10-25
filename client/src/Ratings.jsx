import React, {Component} from 'react'
import StarsRating from './StarsRating'
import BarRatings from './BarRatings'
import axios from 'axios'
import Recommendations  from './Recommendations'
import WriteReview from './WriteReview'
import Drawer from '@material-ui/core/drawer'
import RateForm from './RateForm'
import Review from './Review'
import server from './serverConfig'

const ratingStyle = {
    width:'100%',
    display:'flex',
    flexDirection:'row',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
}
const ReviewStyle = {
  width:'100%',
  display:'flex',
  flexDirection:'row',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  paddingTop:'10px',
}
const ReviewMainStyle = {
  width:'100%',
  display: 'flex',
  flexFlow:'column'
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
const ReviewContainer = {
  fontSize:'16px',
  flexGrow:'2' 
}
const ReviewSubHeader = {
  fontFamily:'Helvetica,Arial,sans-serif',
  fontWeight:'700',
  color:'#000',
  width:'100%',
  textAlign:'left'
  
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
      totalReviews:0,
      reviews:[],
      message:'',
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.update = this.update.bind(this);
  }

  toggleDrawer(open) {
    this.setState({drawerOpen:open})
  }
  update() {
    axios.get(server+'/api/productrating', { 
      params:{id:this.props.product.id}
    })
    .then(response => this.setReviews(response))
  }

  componentDidUpdate(prevProps) {
    // get rating for current product
    if (this.props.product !== prevProps.product) {
      axios.get(server+'/api/productrating', {
        params: {
          id: this.props.product.id
        }
      })
      .then(response => this.setReviews(response))
  }
}

  setReviews(response) {
    let result = response.data;
    let ratings = result.ratings[0];
    ratings.totalVotes = ratings.one_star + ratings.two_stars + ratings.three_stars + ratings.four_stars + ratings.five_stars;
    
    if (result.reviews.length === 0 ) {
      this.setState({
         message:'Have an opinion? Help others decide how horrible this product is.',

    })
    }

    this.setState({
      rating:result,
      totalReviews:result.reviews.length,
      reviews:result.reviews,
      stars: this.calculateStarAverage(ratings),
      percents: this.calculatePercents(ratings),
    })
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
    if (this.state.totalReviews === 0) {
      return (
        <div style={ReviewStyle}>
          <div style={ReviewContainer} >
            <div style={ReviewSubHeader}>No Reviews **</div>
            <div>{this.state.message}</div>
          </div>
            <div>
                <WriteReview show={this.toggleDrawer} />
              </div>
                 <Drawer anchor='bottom' open={this.state.drawerOpen} >
                <div>
                  <RateForm product={this.props.product} close={this.toggleDrawer} onSubmitForm={this.update}/>
               </div>
               </Drawer>
          </div>
        )
    } else {
    return(
        <div style={ratingStyle}>
          <div style={ReviewSubHeader}>Ratings Summary {this.state.totalReviews > 1 ? '( '+this.state.totalReviews+' REVIEWS)' : '('+this.state.totalReviews+' REVIEW)' }
          </div>
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
          </div>
          <div style={ReviewMainStyle}>
          {this.state.reviews.map((review,i) => 
            <Review data={review} key={i} />
            )}
          </div>
            <Drawer anchor='bottom' open={this.state.drawerOpen} >
              <div>
                <RateForm product={this.props.product} close={this.toggleDrawer} onSubmitForm={this.update}/>
              </div>
            </Drawer>
           
          </div>
        
      )
    }
  }
}
export default Ratings