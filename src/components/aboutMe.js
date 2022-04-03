import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AboutMe() {
    const classes = UseStyles();


  return (
      <div id='AboutMe' className={classes.root}>
          <h1 className={classes.appBarTitle}>
                    About<span className={classes.colorTitle}>Me.</span>
        </h1>
    <Card className={classes.card} >  

{/* background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%); */}

      <Box >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className={classes.title} component="div" variant="h2">
            Thomas Fitzgerald
          </Typography>
          <Typography className={classes.subTitle} variant="h4" color="text.secondary" component="div">
            About Me
          </Typography>
          <Typography className={classes.text} component="div" variant="h6">
            <Typography> Full-Stack Developer,</Typography>
            <Typography> From Melbourne Australia,</Typography>
            <Typography> Works well in a Team,</Typography>
            <Typography> Javascript,</Typography>
            <Typography> React & React-Native,</Typography>
            <Typography> Loves to learn,</Typography>
            <Typography> Please consider me when looking for new team members,</Typography>
            <Typography> Clink the link below to access my CV,</Typography>
            <Typography> From Melbourne Australia,</Typography>
            <Typography> Works well in a Team,</Typography>
            <Typography> Javascript,</Typography>
            <Typography> React & React-Native,</Typography>
            <Typography> Loves to learn,</Typography>
            <Typography> Please consider me when looking for new team members,</Typography>
            <Typography> Clink the link below to access my CV,</Typography>
          </Typography>
        </CardContent>
      </Box>
      <CardMedia className={classes.image}
        component="img"
        href="%PUBLIC_URL%/avatar.png"
        image= '../public/assets/avatar.png'
        alt="Avatar"
      />
    </Card>
    </div>
  );
}

const UseStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Fredoka',
    },
    card: {
        height: '500px, auto',
        width: '1000px, auto',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px',
        display: 'center',
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
      color: '#5AFF',
    },
    title: {
        fontFamily: 'Fredoka',
        marginLeft: '15px',
        marginTop: '15px',
        font: '#5AFF',
    },
    subTitle: {
        fontFamily: 'Fredoka',
    },
    image: {
        fontFamily: 'Fredoka',
        display: 'inline-flex',
    },
}));