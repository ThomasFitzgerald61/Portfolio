import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '../images/avatar.png'
import Button from '@mui/material/Button';

export default function AboutMe() {
    const classes = UseStyles();


  return (
      <div id='AboutMe' className={classes.root}>
          <h1 className={classes.appBarTitle}>
                    About<span className={classes.colorTitle}>Me.</span>
        </h1>
    <Card className={classes.card} >  
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className={classes.title} component="div" variant="h2" fontFamily="fredoka" >
            Thomas Fitzgerald
          </Typography>
          <div className={classes.image}>
            <img src={Avatar} component="img" alt="Avatar" />
        </div>
          <Typography className={classes.subTitle} variant="h4" color="text.secondary" component="div">
            About Me
          </Typography>
          <Typography className={classes.text} component="div" variant="h6">
            <Typography> Full-Stack Developer,</Typography>
          </Typography>
          <Typography className={classes.text} >
            <Typography> Clink the link below to access my Resume,</Typography>
          </Typography>
            <div className={classes.button} >
            <Button variant="contained">Resume</Button>
            </div>
        </CardContent>
    </Card>
    </div>
  );
}

const UseStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Fredoka',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: '1',
    },
    card: {
        height: 'auto',
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        display: 'flex',
        opacity: '0.8',
    },
    appBarTitle: {
        flexGrow: 'flex',
        fontFamily: 'Fredoka',
        color: 'white',
        display: 'flex',
        fontSize: '60px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorTitle: {
      color: '#ffc0cb',
    },
    title: {
        fontFamily: 'Fredoka',
        marginLeft: '15px',
        marginTop: '15px',
        font: '#5AFF',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: '#ffc0cb',
    },
    subTitle: {
        fontFamily: 'Fredoka',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: '#5AFF',
    },
    image: {
        fontFamily: 'Fredoka',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        displayImage: 'center',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        spacing: '2',
    },
}));