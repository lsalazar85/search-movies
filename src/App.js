import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import styles from "./App.module.css";


const App = () => (
  <div className={styles.App}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/detail/:id' component={Detail} />
    </Switch>
  </div>
)

App.displayName = "App"

export default App