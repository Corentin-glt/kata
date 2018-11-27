import React from 'react';
import Menu from '../../Components/menu/menu';
import Report from '../Report/reportContainer';
import Stats from '../Stats/statsContainer';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "./homeContainer";
import Error404 from "../Error404/error404";



export default function HomeScene(props) {
  return <div className="mainContainer">
    <header className="headerContainer">
      <Menu name={props.user.name} stats={props.stats} updateStats={props.updateStats}/>
    </header>
    <Switch>
      <Route  path="/report" component={Report}/>
      <Route path="/stats" component={Stats} />
    </Switch>
  </div>
}