import React from 'react'
import StarIcon from '@material-ui/icons/Star';

const StarsRatingStyle = {
    width:'100%',
    fontFamily:'Helvetica,Arial,sans-serif',
    fontSize:'14px',
    verticalAlign: 'middle',
  }

const Stars = (props) => {
   
    let starsGiven = props.starsGiven;
    var sep = starsGiven.indexOf('_');
    starsGiven = starsGiven.substr(0,sep)
    let stars = 0;
    switch (starsGiven) {
      case 'one' : 
        stars = 1;
        break;
      case 'two': 
        stars = 2;
        break;
      case 'three':
        stars = 3;
        break;
      case 'four':
          stars = 4;
        break; 
       case 'five':
           stars = 5;
         break;
    }
    let starDivs = [];
    for (let i=0; i<stars; i++) {
        starDivs.push(<StarIcon key={i}/>)
    }
    
    return(
        <div style={StarsRatingStyle}>
            {starDivs}
        </div>
    )
}

export default Stars;