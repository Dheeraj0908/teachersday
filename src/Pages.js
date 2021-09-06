import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';


const Pages = () => {
  return (
    <Switch> 
      <Route exact path='/' component={App}></Route>
  
    </Switch>
  );
}

export default Pages;