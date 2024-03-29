import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';
import Header from './components/header.js';
import Projects from './components/projects';
// import ProjectsNew from './components/projectsNew.jsx';
import AboutMe from './components/aboutMe'
import ContactUs from './components/contactUs.js';
import Footer from './components/footer.js';
import Skills from './components/skills.js';

export default function App () {
  const classes = UseStyles();
  return <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Projects />
      {/* <ProjectsNew /> */}
      <AboutMe />
      <Skills />
      <ContactUs />
      <Footer /> 
    </div>;
  }
  
  const UseStyles = makeStyles((theme) => ({
    root: {
      minHeight:'70vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }));