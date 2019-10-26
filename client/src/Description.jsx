import React from 'React'


const DescContainer = {
    width:'100%',
    display:'flex',
    flexDirection:'row',
    fontFamily:'Helvetica,Arial,sans-serif',
    fontSize:'14px'

}

const DescChild = {
    flexGrow:'1',
    width:'100px'
}



const Description = (props) => {
    let descriptions = [];
    if (props.product.description) {
        var esc = escape(props.product.description);
        let arr = esc.split('%0A');
        for (let i=0; i <arr.length; i++) {
            let text = unescape(arr[i]);
            descriptions.push(text)
        }
    }
 return(
     
     <div style={DescContainer}>
         <div style={DescChild}>{props.product.name}</div>
         <div style={DescChild}>
                {descriptions.map((desc, i) => 
                    <div className='bulletpoint' key={i}> &bull; {desc}</div>
                )}
        </div>
     </div>
 )
}

export default Description