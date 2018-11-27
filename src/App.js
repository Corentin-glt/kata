import React from 'react';
import Root from './routes';

import {
  Route
} from 'react-router-dom';


const App = () => (
  <div className="App">
    {/*<Route path="/" component={ ({ match }) => (*/}
      {/*<Root />*/}
    {/*)}/>*/}
    <Root />
  </div>
);

export default App;
