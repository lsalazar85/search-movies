import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import { Loader } from './components/Loader';
import styles from "./App.module.css";

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const NotFound = lazy(() => import ('./pages/NotFound'));

const App = () => (
  <Suspense fallback={<Loader/>}>
    <div className={styles.App}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/detail/:id' component={Detail} />
       <Route component={NotFound}/>
    </Switch>
  </div>
  </Suspense>
)

App.displayName = "App"

export default App