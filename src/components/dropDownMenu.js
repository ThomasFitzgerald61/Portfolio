import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import Fade from '@mui/material/Fade';
import { Link, animateScroll as scroll } from "react-scroll";

export default function BasicMenu() {
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
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SortIcon style={{ fontSize: 60 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
            <Link to='header' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                Home
            </Link>
        </MenuItem>
        <MenuItem>
            <Link to='Projects' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                My Projects
            </Link>
        </MenuItem>
        <MenuItem>
            <Link to='AboutMe' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                About Me
            </Link>
        </MenuItem>
        <MenuItem>
            <Link to='Skills' spy={true} smooth={true} offset={-70} duration={500} onClick={handleClose}>
                My Skills
            </Link>
        </MenuItem>
        <MenuItem>
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