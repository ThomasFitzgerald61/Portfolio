import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

export default function footer() {
    const classes = UseStyles();
  return (
    <div className={classes.footer}>
        <h1 className='classes.title'>ContactMe</h1>
        <LinkedInIcon>Linkedin</LinkedInIcon>
        <GitHubIcon>Github</GitHubIcon>
        <MailIcon>Other</MailIcon>
    </div>
  )
}

const UseStyles = makeStyles((theme) => ({
    footer: {
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "rgb(0,0,0,0.5)",
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '13vh',
        color: '#fff',
      },
    title: {
        color: '#ffffff',
        fontFamily: 'Fredoka',
        flexDirection: 'left',
      },
}));