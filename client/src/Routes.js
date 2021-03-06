import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './views/Home';
import Country from './views/Country';

const routes = [
  {
    component: Country,
    path: "/countries/:id"
  },
  {
    component: Home,
    path: "/"
  },
];

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ component, path }, index) => {
          return <Route key={index} exact path={path} component={component}/>
        })}
      </Switch>
    </Router>
  );
}

export default Routes;