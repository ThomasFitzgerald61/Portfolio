import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export default function Skills() {
    const classes = UseStyles();
  return (
    <div className={classes.root}>
        <h1 className={classes.appBarTitle}>
                    S<span className={classes.colorTitle}>kills.</span>
        </h1>
        </div>
  )
}

const UseStyles = makeStyles((theme) => ({
    root: {

    },
    appBarTitle: {
        flexGrow: '1',
        fontFamily: 'Fredoka',
        color: 'white',
        display: 'flex',
        fontSize: '40px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorTitle: {
      color: '#5AFF',
    }
  }));
