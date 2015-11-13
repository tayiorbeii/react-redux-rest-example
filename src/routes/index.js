import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import AthleteView from 'views/AthleteView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/athlete' component={AthleteView} />
    <Route path='athlete/:id' component={AthleteView} />
  </Route>
);
