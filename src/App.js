import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './redux/store';

import HeaderHoc from './Hoc/HeaderHoc';

const store = configureStore();
const history = createBrowserHistory();

const SignIn = lazy(() => import('./container/SignIn'));
const Charts = lazy(() => import('./container/Charts'));
const Signup = lazy(() => import('./container/SignUp'));
const CurrentExecution = lazy(() => import('./container/CurrentExecution'));

const commonSuspenseFunc = (SuspenseCom) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <SuspenseCom />
    </Suspense>
  )
}

const ChartsSuspense = () => {
  return commonSuspenseFunc(Charts)
}

const CurrentExecutionSuspense = () => {
  return commonSuspenseFunc(CurrentExecution)
}


class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route 
                exact path="/"
                component={() => <Redirect to="/login"/>}
              />
              <Route
                path="/login"
                component={() => (
                  <Suspense fallback={<div>...</div>}>
                    <SignIn />
                  </Suspense>
                )}
              />
              <Route
                path="/register"
                component={() => (
                  <Suspense fallback={<div>...</div>}>
                    <Signup />
                  </Suspense>
                )}
              />
              <Route
                path="/dashboard"
                component={HeaderHoc(ChartsSuspense)}
              />
              <Route
                path="/current_execution"
                component={HeaderHoc(CurrentExecutionSuspense)}
              />
              <Route
                path="/performance_status"
                component={HeaderHoc(ChartsSuspense)}
              />
              <Route
                path="/archived_result"
                component={HeaderHoc(ChartsSuspense)}
              />
              <Route
                path="/defective_management"
                component={HeaderHoc(ChartsSuspense)}
              />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
