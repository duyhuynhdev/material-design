import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Main from '../Main';
import DAppBar from '../DAppBar';
import DSideBar from '../DSideBar';
import { firstList, secondList } from './itemlist.js';

import styles from './style.js';

class Header extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <DAppBar 
            classes={classes} 
            theme={theme} 
            shared = {this.state} 
            handleDrawerOpen={this.handleDrawerOpen} >
        </DAppBar>

        <DSideBar 
            classes={classes} 
            theme={theme} 
            shared = {this.state} 
            handleDrawerClose={this.handleDrawerClose} 
            itemLists = {[
                firstList,
                secondList
            ]}>
        </DSideBar>
        <Main
             classes={classes} >
        </Main>
      
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};





export default withStyles(styles, { withTheme: true })(Header);