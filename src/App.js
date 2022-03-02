import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';
import Header from './components/header.js';
import Projects from './components/projects';
import Footer from './components/footer.js';
 
export default function App () {
  const classes = UseStyles();
  return <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Projects />
      <Footer /> 
    </div>;
  }
  
  const UseStyles = makeStyles((theme) => ({
    root: {
      minHeight:'100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));