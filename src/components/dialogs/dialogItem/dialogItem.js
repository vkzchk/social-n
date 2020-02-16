import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../dialogs.module.css'

const DialogItem = (props) => {

  let path = `/dialogs/${props.id}`

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>
      <img src="https://www.shankarainfra.com/img/avatar.png" alt="" />
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;