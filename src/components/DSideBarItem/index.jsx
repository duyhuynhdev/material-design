import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
function DSideBarItem(props) {
    const {itemList} = props;
    return(
        <div>
           {itemList.map(item=>(
               <Link to={item.link}>
                <ListItem button key={item.title}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
              </Link>
            ))}
        </div>
    );
}
export default DSideBarItem;