import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '../images/avatar.png'
import Button from '@mui/material/Button';
import Pdf from '../assets/ThomasFitzgerald Resume.pdf';
import Cert from '../assets/Full-Stack Engineer Certificate.pdf';

export default function AboutMe() {
  const classes = UseStyles();


  return (
    <div id='AboutMe' className={classes.root}>
      <h1 className={classes.appBarTitle}>
        About<span className={classes.colorTitle}>Me.</span>
      </h1>
      <Card className={classes.card} >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className={classes.title} fontFamily="fredoka" >
            Thomas
            <br />
            Fitzgerald
          </div>
          <div className={classes.image}>
            <img className={classes.pic} src={Avatar} alt="Avatar" width={220} height={220} />
          </div>
        </CardContent>
        <div className={classes.root}>
          <h1 className={classes.colorTitle} variant="h4" color="text.secondary" component="div">
            About Me
          </h1>
          <div>
            <h2>
              <h2> Full-Stack Developer,</h2>
            </h2>
          </div>
          <h2>
            <h2> Clink the link below to access my Resume,</h2>
          </h2>
          <div className={classes.button} >
            <Button variant="contained" href={Pdf} target='_blank' rel='noopener noreferrer'>
              Resume
            </Button>
          </div>
          <div className={classes.button} >
            <Button variant="contained" href={Cert} target='_blank' rel='noopener noreferrer'>
              Certificate
            </Button>
          </div>
          <h1>Education</h1>
          <h2>Ongoing</h2>
          <h2>University | Swinburne | Melbourne Vic</h2>
          <h2>Bachelor of Information and Communication Technology</h2>
          <h2>Ongoing study | Part-time</h2>
        </div>
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
    maxWidth: '90%',
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
    flexGrow: 'flex',
    fontSize: '60px',
    fontWeight: 'bold',
    margin: 'auto',
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
    flex: '1',
    resizeMode: 'contain',
  },
  button: {
    display: 'flex',
    spacing: '2',
    marginTop: '5px',
  },
  pic: {
    width: 'auto',
    height: "auto",
  },
}));
