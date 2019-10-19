import React, {Component} from 'react'
import ProductInfo from './ProductInfo.jsx'
import RateForm from './RateForm'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProduct:{},
            rateFormShow:false

        }
    this.showRateForm = this.showRateForm.bind(this);
    }

    showRateForm() {
        console.log('ShowRateForm');
        this.setState({
            rateFormShow:true,
        })
    }

    componentDidMount() {
        // get a randomProduct to pass to our component
        axios.get('/api/randomproduct')
        .then(response => {
            this.setState({
               selectedProduct:response.data
            })
        })
    }

    render() {
        return(
            <div>

                <ProductInfo data={this.state.selectedProduct} showForm={this.showRateForm} />
                <RateForm show={this.state.rateFormShow} />
           </div>
        )
    }
}

export default App;