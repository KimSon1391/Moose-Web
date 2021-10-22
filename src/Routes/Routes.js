import CatagoryPage from 'pages/CatagoryPage';
import DetailPage from 'pages/Detail/DetailPage';
import HomePage from 'pages/HomePage';
import React from 'react';
import { Route, Switch } from 'react-router';

function Routes(props) {
  return (
    <Switch>
      <Route path="/:category/search/:search" component={CatagoryPage} />
      <Route path="/:category/:movieId" component={DetailPage} />
      <Route path="/:category" component={CatagoryPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default Routes;
