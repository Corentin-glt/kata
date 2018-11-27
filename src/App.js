import React from 'react';
import Root from './routes';
import configureStore from './Store/configureStore'

const store = configureStore();

const App = () => (
  <div className="App">
    <Root store={store}/>
  </div>
);

export default App;
