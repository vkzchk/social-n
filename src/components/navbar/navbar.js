import React from 'react';

import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {

  // const state = props.store.getState()

  // const friendsList = state.sidebar.friends.map(friend => {
  //   return (
  //     <div className={classes.friendList}  key={friend.id}>
  //       <img src="https://www.shankarainfra.com/img/avatar.png" alt="" /><br />
  //       {friend.name}
  //     </div>
  //   )
  // })

  return (
    <div className={classes.navbar}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
      </div>
      <div>
        <h2>Friends</h2>
        {/* {friendsList} */}
      </div>
    </div>
  );
}

export default Navbar;