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
import QA from '@material-ui/icons/QuestionAnswerOutlined'
import Specs from '@material-ui/icons/LibraryBooksRounded';
import Description from './Description'
import Specifications from './Specifications'

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


const MainTitle = {
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontSize: '28px',
    fontWeight:'400',
    color:'#333',
    textAlign:'center'
}


const classes = useStyles();



    return (
        <div className={classes.root}>
            <div style={MainTitle}>Product Information</div>
           <ExpansionPanel  >
               <ExpansionPanelSummary
               className ={classes.multiExpansionPanelSummary}
               expandIcon={<Add className={classes.icon}/>}
               aria-controls="panel1a-content"
               id="panel1a-header">
                    <Info />
                   <Typography className={classes.heading}>&nbsp;&nbsp;&nbsp;Description</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                    <Description product={props.data} />
               </ExpansionPanelDetails>
        </ExpansionPanel>
           <ExpansionPanel >
                <ExpansionPanelSummary
                 className ={classes.multiExpansionPanelSummary}
                expandIcon={<Add className={classes.icon}/>}
                aria-controls="panel2bh-content"
                id="panel3bh-header"
                >
                    <Specs/>
                    <Typography className={classes.heading}>&nbsp;&nbsp;&nbsp;Specifications</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <Specifications />
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
                    <Typography className={classes.heading}>&nbsp;&nbsp;&nbsp;Ratings & Reviews</Typography>

            </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <Ratings product={props.data} showForm={props.showForm}/>
                </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
            <ExpansionPanelSummary
                    className ={classes.multiExpansionPanelSummary}
                    expandIcon={<Add className={classes.icon}/>}
                    aria-controls="panel4bh-content"
                    id="panel3bh-header"
                        >
                    <QA/>
                    <Typography className={classes.heading}>&nbsp;&nbsp;&nbsp;Community Q & A</Typography>

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

