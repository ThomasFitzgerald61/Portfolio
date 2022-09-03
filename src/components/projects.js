import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './imageCard';
import project from '../static/project';
import UseWindowPosition from '../hook/useWindowPosition';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function projects() {
    const classes = UseStyles();
    const checked = UseWindowPosition('header');
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
      <div id='Projects' >
        <h1 className={classes.appBarTitle}>
                    My<span className={classes.colorTitle}>Projects.</span>
                    </h1>
         <Carousel responsive={responsive} infinite={true} swipeable={false} draggable={false} showDots={true}>
            <ImageCard project={project[5]} checked={checked} />
            <ImageCard project={project[4]} checked={checked} />
            <ImageCard project={project[0]} checked={checked} />
            <ImageCard project={project[1]} checked={checked} />
            <ImageCard project={project[2]} checked={checked} />
            <ImageCard project={project[3]} checked={checked} />
        </Carousel>
      </div>
  )
}
const UseStyles = makeStyles((theme) => ({
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
