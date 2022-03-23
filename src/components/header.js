import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import BasicMenu from './dropDownMenu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link as Scroll } from 'react-scroll';

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.appBarTitle}>
                    My<span className={classes.colorTitle}>Portfolio.</span>
                    </h1>
                <IconButton className={classes.icon} >
                    <BasicMenu /> 
                </IconButton>
                </Toolbar>
            </AppBar>
            
            <Collapse in={checked} { ...(checked ? { timeout: 5000 } : {})}collapseHeight={50}>
                <div className={classes.container}>
                <h1 className={classes.title}>
                    Hi, I'm Thomas,<br /><span className={classes.colorTitle}>Fullstack Developer  <br />& UI UX Designer</span>
                </h1>
                <h2 className={classes.subtitle}>Welcome to my Portfolio</h2>
                <Scroll to='next' smooth={true}>
                <IconButton>
                    <ArrowDownwardIcon className={classes.arrowDown} style={{ fontSize: 60 }} />
                </IconButton>
                </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
 root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Fredoka',
    },
 appBar: {
    background: 'none',
    fontFamily: 'Fredoka',
 },
 icon: {
     color: '#fff',
     fontSize: '4rem',
 },
 appBarTitle: {
     flexGrow: '1',
     fontSize: '40px',
 },
 appBarWrapper: {
     width: '80%',
     margin: '0 auto',
 },
 container: {
     textAlign: 'center',
 },
 colorTitle: {
     color: '#5AFF',
 },
 title: {
     color: '#fff',
     fontSize: '4.5rem'
 },
 arrowDown: {
     color: '#5AFF',
     fontSize: '10rem',
 },
 subtitle: {
    color: '#fff',
    fontSize: '2rem',
 },
}));