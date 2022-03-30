import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import Carousel from 'react-material-ui-carousel'

export default function Skills() {
    const classes = UseStyles();
return (
    <div id='Skills' className={classes.root}>
        <h1 className={classes.appBarTitle}>
                    My<span className={classes.colorTitle}>Skills.</span>
        </h1>
        <Card className={classes.card}>
            <Carousel>
                
            </Carousel>
    </Card>
        </div>
  );
}

const UseStyles = makeStyles((theme) => ({
    card: {
        height: '1000px, auto',
        width: '1000px, auto',
        justifyContent: 'center',
        alignItems: 'row',
        margin: '30px',
        display: 'center',
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
    },
  }));
