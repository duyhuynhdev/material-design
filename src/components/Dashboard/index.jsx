import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Plot from 'react-plotly.js';
import {dashboard_items} from './sample.js';
import {styles} from './style.js';
class Dashboard extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
        <GridList cellHeight={600} className={classes.gridList} cols={2}>
        {dashboard_items.map(item => (
          <GridListTile key={item.title} cols={item.cols}>
          <ListSubheader component="div">
          <Typography variant="title" color="primary">
                {item.title}
          </Typography>
          </ListSubheader>
          <Plot
            data={item.data}/>
          <GridListTileBar
            actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
          />
        </GridListTile>
        ))}
      </GridList>
    </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Dashboard);