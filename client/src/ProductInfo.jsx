import React  from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'



const ProductInfo = (props) => {
    return (
        <div className='productInfo_container'>
            <h1>Product Information</h1>
            <div className='productInfo_closed'>
                <div className='tab_header'>
                    Description
                </div>
                <div className='tab_content'>
                    <div className='productInfo_Name'>
                        {props.data.name}
                    </div>
                    <div className='productInfo_descr'>
                        {props.data.description}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo;