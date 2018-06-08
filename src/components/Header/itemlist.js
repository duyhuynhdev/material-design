import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReportIcon from '@material-ui/icons/Receipt';



export const firstList = [
    {
    
        title: 'Home',
        icon: <HomeIcon />,
        link:'/'
    }
];

export const secondList = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link:'/dashboard'
    },
    {
        title: 'Report',
        icon: <ReportIcon />,
        link:'/report'
    }
];