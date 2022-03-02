import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Collapse } from '@material-ui/core';

export default function ImageCard({ project, checked }) {
    const classes = useStyles();
  return (
    <Collapse in={checked} { ...(checked ? { timeout: 1000 } : {})}collapseHeight={50}>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={project.imageUrl} 
        alt="green iguana"
        />
      <CardContent 
      className={classes.cardContent}
      >
        <Typography 
        gutterBottom variant="h5" 
        component="h1" 
        className={classes.title}
        >
          {project.title}
        </Typography>
        <Typography 
        className={classes.desc} 
        variant="body2" 
        color="text.secondary" >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
    </Collapse>
  );
}

const useStyles = makeStyles({
    root: {
      maxWidth: 645,
      margin: '20px',
      // opacity: '0.3',
      backgroundColor: 'green',
    },
    media: {
      height: 440,
    },
    title: {
      fontFamily: 'Fredoka',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#5AFF',
    },
    cardContent: {
    },
    desc: {
      fontFamily: 'Fredoka',
      fontSize: '1.1rem',
      color: '#ddd',
    },
  });