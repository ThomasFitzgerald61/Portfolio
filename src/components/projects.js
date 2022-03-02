import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './imageCard';
import project from '../static/project';
import useWindowPosition from '../hook/useWindowPosition';


export default function Projects() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id='next'>
            <ImageCard project={project[0]} checked={checked} />
            <ImageCard project={project[1]} checked={checked} />
        </div>
  )
}
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      },
}));
