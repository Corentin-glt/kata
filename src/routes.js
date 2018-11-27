/**
 * Created by corentin on 27/11/2018.
 */
import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
          <Route exact path="/" component={Report}/>
          <Route path="/report" component={Report}/>
          <Route path="/stats" component={Stats}/>
        </div>
      </Router>

    )
  }
}
;

export default Root;