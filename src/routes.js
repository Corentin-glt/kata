/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Report from './pages/Report/reportContainer';
import Stats from './pages/Stats/statsContainer';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      loading: true,
    };
  }

  render() {
    return(
      <Router>
        <Route exact path="/" component={Report} />
        <Route path="/report" component={Report} />
        <Route path="/stats" component={Stats} />
      </Router>
    )
  }
}