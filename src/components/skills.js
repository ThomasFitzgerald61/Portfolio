import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CircleProgress} from 'react-gradient-progress';
import Card from '@mui/material/Card';

export default function Skills() {
    const classes = UseStyles();
return (
    <div id='Skills' className={classes.root}>
        <h1 className={classes.appBarTitle}>
                    My<span className={classes.colorTitle}>Skills.</span>
        </h1>
        <Card className={classes.card}>
        <div className={classes.container}>
        <CircleProgress percentage={90} strokeWidth={20} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"  fontSize="20px" /> HTML
        <CircleProgress percentage={90} strokeWidth={20} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor="#f0f0f0"  fontSize="20px" /> CSS
        <CircleProgress percentage={90} strokeWidth={20} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"  fontSize="20px" /> Javascript
        <CircleProgress percentage={90} strokeWidth={20} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor="#f0f0f0"  fontSize="20px" /> React
        <CircleProgress percentage={60} strokeWidth={20} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"  fontSize="20px" /> React Native
        </div>
        <div className={classes.container}>
        <CircleProgress percentage={70} strokeWidth={20} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"  fontSize="20px" /> Git
        <CircleProgress percentage={50} strokeWidth={20} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor="#f0f0f0"  fontSize="20px" /> PostgreSQL
        <CircleProgress percentage={50} strokeWidth={20} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0"  fontSize="20px" /> Node/Express
        </div>
        </Card>
    </div>
  );
}

const UseStyles = makeStyles((theme) => ({
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
    card: {
        height: 'auto',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '80px',
        display: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontFamily: 'Fredoka',
    },
  }));
