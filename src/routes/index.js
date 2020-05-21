import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import BackgroundRoute from './Background';

const createRoutes = () => (
  <CoreLayout>
    <Switch>
      <Route exact path={Home.path} component={() => <Home.component />} />
      {/* Build Route components from routeSettings */
        [
          BackgroundRoute,
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))
      }
    </Switch>
  </CoreLayout>
);

export default createRoutes;
