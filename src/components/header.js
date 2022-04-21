import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import BasicMenu from './dropDownMenu';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link as Scroll } from 'react-scroll';
import Link from '@mui/material/Link';

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
                  <Link className={classes.appBarTitle} underline="none" href="header" color="white" >
                    My<span className={classes.colorTitle}>Portfolio.</span>
                  </Link>
                </h1>
                <IconButton className={classes.basicMenu} >
                    <BasicMenu style={{ fontSize: 60, color: "#ffffff" }} /> 
                </IconButton>
                </Toolbar>
            </AppBar>
            
            <Collapse in={checked} { ...(checked ? { timeout: 5000 } : {})}collapseHeight={50}>
                <div className={classes.container}>
                <h2 className={classes.title}>
                    Hi, I'm Thomas,<br /><span className={classes.colorTitle}>Fullstack Developer  <br />& UI UX Designer</span>
                </h2>
                <h2 className={classes.subtitle}>Welcome to my Portfolio</h2>
                <Scroll to='next' smooth={true} offset={-120}>
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
    fontColor: '#ffffff',
},
appBar: {
    background: 'none',
    fontFamily: 'Fredoka',
    marginTop: '-30px',
    color: '#ffffff',
},
basicMenu: {
    marginRight: '20px',
    marginTop: '-20px',
    fontSize: '10rem',
    color: '#ffffff',
},
appBarTitle: {
     flexGrow: '1',
     fontSize: '40px',
     fontColor: '#ffffff',
 },
 appBarWrapper: {
    margin: "15px",
    marginBottom: '25px',
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent"
 },
 container: {
     textAlign: 'center',
    },
 colorTitle: {
     color: '#ffc0cb',
     fontSize: '44px',
    },
 title: {
     paddingTop: '50px',
     color: '#ffffff',
     fontSize: '2.5rem',
 },
 arrowDown: {
     color: '#ffffff',
     fontSize: '10rem',
 },
 subtitle: {
    color: '#ffffff',
    fontSize: '2rem',
 },
}));