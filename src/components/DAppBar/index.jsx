import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language'
function DAppBar(props){
    const { classes, theme, shared, handleDrawerOpen} = props;
    return ( <AppBar
          position="absolute"
          className={classNames(classes.appBar, shared.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!shared.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, shared.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
          </Typography>
          <Button  color="inherit">
              Japanese
          <LanguageIcon className={classes.rightIcon} />
          </Button>
          </Toolbar>
        </AppBar>);
}

export default DAppBar;