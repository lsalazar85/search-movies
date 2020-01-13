import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Loader } from './components/Loader';
import { store } from './store';
import styles from "./App.module.css";

const Home = lazy(() => import('./containers/pages/Home'));
const Detail = lazy(() => import('./containers/pages/Detail'));
const NotFound = lazy(() => import ('./components/NotFound'));

const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader/>}>
      <div className={styles.App}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Suspense>
  </Provider>
)

App.displayName = "App"

export default App