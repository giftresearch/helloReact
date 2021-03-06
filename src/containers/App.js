import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '~/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '~/src/scss/application.scss';

import Layout from '~/src/components/views/Layout';
import routes from '~/src/routes';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const App = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={`route-${i}`} {...route} />)}
      </Switch>
    </Layout>
  </Router>
);

export default App;
