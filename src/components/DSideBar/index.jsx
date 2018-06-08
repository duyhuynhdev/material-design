import React from 'react';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DSideBarItem from '../DSideBarItem';
function DSideBar(props){
    const { 
        classes, 
        theme, 
        shared, 
        handleDrawerClose,
        itemLists,
    } = props;
    return(
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !shared.open && classes.drawerPaperClose),
          }}
          open={shared.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          {itemLists.map( (item, index)=>(
            <div key={index}>
                <Divider />
                <List>
                  <DSideBarItem itemList ={item}>
                  </DSideBarItem>
                </List>
            </div>
        ))}
        </Drawer>
    );
}
export default DSideBar;