import React from 'react';

import classes from './header.module.css';
import { NavLink } from 'react-router-dom';



const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.loginBlock}>
        {
          props.isAuth
            ? props.login
            : <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </div>
  );
}

export default Header;
