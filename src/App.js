import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './redux/store';

const store = configureStore();
const history = createBrowserHistory();
const HomePage = lazy(() => import('./container/HomePage'));
const SignIn = lazy(() => import('./container/SignIn'));

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              {/* <Route
                exact path="/"
                component={() => (
                  <Suspense fallback={<div>...</div>}>
                    <HomePage />
                  </Suspense>
                )}
              /> */}
              <Route
                path="/signin"
                component={() => (
                  <Suspense fallback={<div>...</div>}>
                    <SignIn />
                  </Suspense>
                )}
              />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
