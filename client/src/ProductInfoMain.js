import React, {Component} from 'react'
import ProductInfo from './ProductInfo.jsx'
import axios from 'axios'
import server from './serverConfig'

class ProductInfoMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProduct:{},
        }
    }


    componentDidMount() {
        // get a randomProduct to pass to our component
        axios.get(server+'/api/randomproduct')
        .then(response => {
            this.setState({
               selectedProduct:response.data
            })
        })
    }

    render() {
        return(
            <div>
                <ProductInfo data={this.state.selectedProduct} />
           </div>
        )
    }
}

export default ProductInfoMain;