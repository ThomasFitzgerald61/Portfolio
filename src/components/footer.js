import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Toolbar, IconButton } from '@material-ui/core';
import { Link, animateScroll as scroll } from "react-scroll";

export default function footer() {
    const classes = UseStyles();
    const handleClick = (event) => {
  };

  return (
    <div className={classes.footer}>
      <Toolbar className={classes.wrapper}>
        <h1 className='classes.title'>Thomas Fitzgerald</h1>
        <IconButton className={classes.appBarWrapper} elevation={0} onClick={handleClick}>
        <a underline='none' to="header" >
        <HomeIcon style={{ color: 'white', margin: '15' }}></HomeIcon>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/thomas-fitzgerald-333a55174/" rel="noopener" >     
        <LinkedInIcon style={{ color: 'white', margin: '15' }}></LinkedInIcon>
        </a>  
        <a target="_blank" href='https://github.com/ThomasFitzgerald61' >
        <GitHubIcon  style={{ color: 'white', margin: '15' }}></GitHubIcon>
        </a>
        <a>
        <MailIcon style={{ color: 'white', margin: '15' }}></MailIcon>
        </a>
        </IconButton>
      </Toolbar>
    </div>
  )
}

const UseStyles = makeStyles((theme) => ({
  margin: theme.spacing(1, 'auto'), // '8px auto'
    footer: {
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "rgb(0,0,0,0.5)",
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '13vh',
        color: '#ffc0cb',
      },
      wrapper: {
        color: '#ffc0cb',
      },
    title: {
        color: '#ffc0cb',
        fontFamily: 'Fredoka',
        flexDirection: 'left',
      },
    appBarWrapper: {
        width: '70%',
        margin: '15px',
    },
}));