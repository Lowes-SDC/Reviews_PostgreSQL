import React  from 'react'
import {makeStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Ratings from './Ratings'

export default function ProductInfo(props) {

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',
      
    },
    multiExpansionPanelSummary: {
        backgroundColor:'#ff0',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));



const classes = useStyles();



    return (
        <div className={classes.root}>
           <ExpansionPanel  >
               <ExpansionPanelSummary
               className ={classes.multiExpansionPanelSummary}
               expandIcon={<ExpandMoreIcon/>}
               aria-controls="panel1a-content"
               id="panel1a-header">
                   <Typography className={classes.heading}>Description</Typography>


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
                expandIcon={<ExpandMoreIcon />}
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
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                    <Typography className={classes.heading}>Ratings & Reviews</Typography>

            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <Ratings productId={props.data.id}/>
                </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
            <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
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

