import React  from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import Add from '@material-ui/icons/Add'
import Ratings from './Ratings'
import Info from '@material-ui/icons/InfoOutlined'
import StarIcon from '@material-ui/icons/StarBorder'

//StarHalf

export default function ProductInfo(props) {

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',

    },
    multiExpansionPanelSummary: {
        color:'#fff',
        backgroundColor:'#036196',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        color: '#fff',
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon : {
        color:'#fff',
    }
}));



const classes = useStyles();



    return (
        <div className={classes.root}>
           <ExpansionPanel  >
               <ExpansionPanelSummary
               className ={classes.multiExpansionPanelSummary}
               expandIcon={<Add className={classes.icon}/>}
               aria-controls="panel1a-content"
               id="panel1a-header">
                    <Info />
                   <Typography className={classes.heading}>&nbsp;Description</Typography>


               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
               <Typography className={classes.secondaryHeading}>{props.data.name} </Typography>
                <Typography>
                         {props.data.description}
                    </Typography>
               </ExpansionPanelDetails>
        </ExpansionPanel>
           <ExpansionPanel >
                <ExpansionPanelSummary
                 className ={classes.multiExpansionPanelSummary}
                expandIcon={<Add className={classes.icon}/>}
                aria-controls="panel2bh-content"
                id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Specifications</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
            <ExpansionPanelSummary
                        className ={classes.multiExpansionPanelSummary}
                        expandIcon={<Add className={classes.icon}/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                    <StarIcon />
                    <Typography className={classes.heading}>Ratings & Reviews</Typography>

            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <Ratings productId={props.data.id}/>
                </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
            <ExpansionPanelSummary
                    className ={classes.multiExpansionPanelSummary}
                    expandIcon={<Add className={classes.icon}/>}
                    aria-controls="panel4bh-content"
                    id="panel3bh-header"
                        >
                    <Typography className={classes.heading}>Community Q & A</Typography>

            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </ExpansionPanelDetails>
      </ExpansionPanel>

        </div>
    )
}

