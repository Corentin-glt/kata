/**
 * Created by corentin on 27/11/2018.
 */
import Home from './Pages/Home/homeContainer';
import React from 'react';
import {
  Switch,
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types'
import {Provider} from 'react-redux';
import Error404 from './Pages/Error404/error404';
import { createHashHistory } from "history";
const history = createHashHistory();




function Root({store}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={Home}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;