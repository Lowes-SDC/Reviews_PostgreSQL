import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

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
    for (let i=0; i<5; i++) {
      if (i < stars) {
        starDivs.push(<StarIcon key={i}/>)
      } else  {
        starDivs.push(<StarBorder key={i}/>)
      }
    }
    
    return(
        <div style={StarsRatingStyle}>
            {starDivs}
        </div>
    )
}

export default Stars;