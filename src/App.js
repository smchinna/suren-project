import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './redux/store';

const store = configureStore();
const history = createBrowserHistory();
const SignIn = lazy(() => import('./container/SignIn'));

class App extends React.Component {
  render() {
    return (
      <div className="mainApp">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route
                path="/"
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
