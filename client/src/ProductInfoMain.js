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


    getProduct(itemId) {
        console.log('get Product ' + itemId)
        // get product
        axios.get(server+'/api/products',
        { 
            params:{id:itemId}
        })
        .then(response => {
            this.setState({
               selectedProduct:response.data
            })
        })
    }

    componentDidMount() {
        // get a randomProduct to pass to our component
        window.addEventListener('changeItem', (e) => this.getProduct(e.detail))
        // axios.get(server+'/api/randomproduct')
        // .then(response => {
        //     this.setState({
        //        selectedProduct:response.data
        //     })
        // })
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