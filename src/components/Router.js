import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Landing from './Landing'
import App from "./App";
import NotFaund from './NotFaund'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/restaurant/:restaurantId' component={App} />
        <Route component={NotFaund} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;