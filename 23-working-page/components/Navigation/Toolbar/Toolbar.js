import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Tollbar}>
        <DrawerToogle clicked={props.drawerToggleClicked}/>
        <Logo height='80%'/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;