import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function ContactUs( checked ) {
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
    <Collapse id='ContactMe' className={classes.card} in={checked} { ...(checked ? { timeout: 1000 } : {})}collapseHeight={50}>
      <h1 className={classes.appBarTitle}>
                    Contact<span className={classes.colorTitle}>Me.</span>
                    </h1>
    <Card className={classes.root} >
      <CardContent className={classes.container}>
        <Box>
      <form className={classes.card} ref={form} onSubmit={sendEmail}>
      <div>
        <label>Full Name:</label>
        <input className={classes.box} type="text" name="to_name" />
      </div>
      <div>
      <label>Email Address:</label>
      <input className={classes.box} type="email" name="from_name" />
      </div>
      <div>
      <label>Subject:</label>
      <input className={classes.box} type="subject" name="subject" />
      </div>
      <div>
      <label className={classes.message}>Message:</label>
      <textarea className={classes.messageBox} name="message" />
      </div>
      <Stack>
      <Button className={classes.buttonSend} type="submit" value="Send" size="10px" variant="contained" endIcon={<SendIcon />} >
        Send
      </Button>
      </Stack>
    </form>
    </Box>
    </CardContent>
    </Card>
    </Collapse>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#5AFF',
  },
  card: {
    justifyContent: 'stretch',
    maxWidth: '500px',
    margin:'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  desc: {
    fontFamily: 'Fredoka',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  icon: {
    margin: '10px'
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
  buttonSend: {
    font: 'white',
    box: 'blue',
    marginLeft: '20px',
    marginRight: '',
},
  messageBox: {
    height: '100px',
    width: '300px',
    alignItems: 'right',
},
box: {
  maxWidth: '200px',
  justifyContent: 'stretch',
  flex: '1',
  alignItems: 'right',
},
message: {
  margin: '10px',
},
}));