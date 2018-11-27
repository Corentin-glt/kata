/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Error404 from './pages/Error404/error404';
import Home from './pages/Home/homeContainer';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      loading: true,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>

    )
  }
}
;

export default Root;