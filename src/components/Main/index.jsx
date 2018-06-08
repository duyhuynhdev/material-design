import React from 'react';
import PropTypes from 'prop-types';
import DPivotTable from '../DPivotTable'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard';
import SavedReports from '../SavedReports';



class Main extends React.Component{
    render(){
    const { classes } = this.props;
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route exact path='/' component={SavedReports}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/report' component={DPivotTable}/>
            </Switch>
        </main> 
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default Main