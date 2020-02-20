import React from 'react';
import { Route } from 'react-router-dom'

import classes from './App.module.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import DialogsContainer from './components/dialogs/dialogs-container';
import UsersContainer from './components/users/users-container';
import ProfileContainer from './components/profile/profile-container';

const App = () => {

  return (
    <div className={classes.app}>
      <Header />
      <Navbar />
      <div className={classes.appContent}>
        <Route path='/profile' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/users' render={() => < UsersContainer />} />
        {/* <Route exact path='/news' component={() => <News />}/>
        <Route exact path='/music' component={() => <Music />}/>
        <Route exact path='/setting' component={() => <Settings />}/> */}
      </div>
    </div>
  );
}

export default App;
