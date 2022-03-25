import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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
        <ImageList className={classes.grid} >
      {itemData.map((item) => (
        <ImageListItem className={classes.item} key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            justifyContent="center"
            alignItems='center'
            display="center"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
            align='center'
          />
        </ImageListItem>
      ))}
    </ImageList>
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
    },
    grid: {
        width: '500',
        Height: '450',
        justifyContent: 'center',
        alignItems: 'space-between',
        display: 'center',
        margin: '60px',
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'center',
    },
  }));


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];