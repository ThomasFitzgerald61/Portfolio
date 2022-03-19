import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Toolbar, IconButton } from '@material-ui/core';

export default function footer() {
    const classes = UseStyles();
  return (
    <div className={classes.footer}>
      <Toolbar className={classes.wrapper}>
        <h1 className='classes.title'>Thomas Fitzgerald</h1>
        <IconButton className={classes.appBarWrapper} elevation={0}>
        <HomeIcon style={{ color: 'white', margin: '15' }}>Other</HomeIcon>
        <LinkedInIcon link={''} style={{ color: 'white', margin: '15' }}>Linkedin</LinkedInIcon>
        <GitHubIcon href={'https://github.com/ThomasFitzgerald61'} style={{ color: 'white', margin: '15' }}>GitHub</GitHubIcon>
        <MailIcon style={{ color: 'white', margin: '15' }}>Other</MailIcon>
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
        color: '#fff',
      },
      wrapper: {
        color: '#fff',
      },
    title: {
        color: '#ffffff',
        fontFamily: 'Fredoka',
        flexDirection: 'left',
      },
    appBarWrapper: {
        width: '80%',
        margin: '10px',
    },
}));