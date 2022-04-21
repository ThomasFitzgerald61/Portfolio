import * as React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import Fade from '@mui/material/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';

export default function BasicMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon 
        sx={{ fontSize: 60 }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        <SortIcon style={{ fontSize: 70 }} marginRight="10px" />
      </MenuIcon>
      <Menu 
        className={classes.root}
        id="basic-menu" 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className={classes.root} >
            <Link to='header' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose} textAlign="left" >
                Home
            </Link>
        </MenuItem>
        <MenuItem className={classes.root} >
            <Link to='Projects' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                My Projects
            </Link>
        </MenuItem>
        <MenuItem className={classes.root} >
            <Link to='AboutMe' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                About Me
            </Link>
        </MenuItem>
        <MenuItem className={classes.root} >
            <Link to='Skills' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                My Skills
            </Link>
        </MenuItem>
        <MenuItem className={classes.root} >
            <Link to='ContactMe' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                Contact Me
            </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

<Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
></Link>

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
},
}));