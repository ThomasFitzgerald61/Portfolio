import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function ContactUs() {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fo9k58c', 'template_fpf2z1o', form.current, 'Jo79GXw3xksZHet9_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <Card className={classes.root} >
      <CardContent className={classes.container}>
        <Box>
      <form className={classes.card} ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" />
      </div>
      <div>
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      <div>
      <label>Message</label>
      <textarea name="message" />
      </div>
      <Button size="small">
      <input type="submit" value="Send" />
      </Button>
    </form>
    </Box>
    </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
     display: 'inlineBlock',
     justifyContent: 'center',
     alignItems: 'center',
     height: '20vh',
     },
     root: {
       minWidth: '75',
       backgroundColor: "rgb(0,0,0,0.5)",
     },
     card: {
       justifyContent: 'center',
     }
 }));