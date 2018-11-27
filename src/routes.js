/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import {
  Switch,
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types'
import {Provider} from 'react-redux';
import Report from './Pages/Report/reportContainer';
import Stats from './Pages/Stats/statsContainer';
import Error404 from './Pages/Error404/error404';

function Root({store}) {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Report}/>
            <Route path="/report" component={Report}/>
            <Route path="/stats" component={Stats}/>
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