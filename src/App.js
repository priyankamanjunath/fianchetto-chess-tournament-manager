import React from 'react';
import createHistory from 'history/createBrowserHistory';
import RoutingContainer from "./containers/RoutingContainer";

const history = createHistory();

function App() {
  return (
      <RoutingContainer history = {history}/>
  );
}

export default App;
