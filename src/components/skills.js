import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';

export default function Skills() {
    const classes = UseStyles();
  return (
    <div id='Skills' className={classes.root}>
        <h1 className={classes.appBarTitle}>
                    My<span className={classes.colorTitle}>Skills.</span>
        </h1>
        <Card className={classes.card}>
            <h1>Hello World!!!</h1>
        </Card>
        </div>
  )
}

const UseStyles = makeStyles((theme) => ({
    card: {
        height: '500px, auto',
        width: '1000px, auto',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px',
        display: 'center',
        opacity: '0.8',
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
      color: '#5AFF',
    }
  }));
