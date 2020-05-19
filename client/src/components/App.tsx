import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Sidebar } from './Sidebar';
import { SandboxWarning } from './SandboxWarning';
import { ConfirmDialog } from './ConfirmDialog';
import { Notifications } from './Notifications';
import { FlyingCat } from './FlyingCat';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { NotFound } from '../pages/NotFound';

import routes from '../routes';

import { MAX_WIDTH, COLORS } from '../constants';

const App = withRouter(({ location }: RouteComponentProps) => {
  const { pathname } = location;
  const hideUI = pathname.match(/^\/(?:landing|login|logout|1337)/);

  return (
    <Background>
      {!hideUI && (
        <>
          <Sidebar />
          <SandboxWarning />
          <ConfirmDialog />
          <Notifications />
        </>
      )}
      <Constraint>
        <Switch>
          <Route path="/landing" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/1337" component={FlyingCat} />
          {Object.keys(routes).map((key, index) => {
            const route = routes[key];
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
          <Route exact path="/">
            <Redirect to="/devices" />
          </Route>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Constraint>
    </Background>
  );
});

const Background = styled.div`
  background: ${COLORS.white};
`;

const Constraint = styled.div`
  max-width: ${MAX_WIDTH}px;
`;

export { App };
