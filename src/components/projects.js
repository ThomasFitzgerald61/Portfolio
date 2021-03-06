import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './imageCard';
import project from '../static/project';
import useWindowPosition from '../hook/useWindowPosition';
import { fontSize } from '@mui/system';


export default function Projects() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
      <div id='Projects' >
        <h1 className={classes.appBarTitle}>
                    My<span className={classes.colorTitle}>Projects.</span>
                    </h1>
         <div className={classes.root} id='next'>
            <ImageCard project={project[4]} checked={checked} />
            <ImageCard project={project[0]} checked={checked} />
            <ImageCard project={project[1]} checked={checked} />
            <ImageCard project={project[2]} checked={checked} />
            <ImageCard project={project[3]} checked={checked} />
        </div>
      </div>
  )
}
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      },
      appBarTitle: {
        flexGrow: '1',
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
}));
