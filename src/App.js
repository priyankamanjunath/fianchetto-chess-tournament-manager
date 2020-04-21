import React from 'react';
import RoutingContainer from "./containers/RoutingContainer";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

function App() {
  return (
      <RoutingContainer history = {history}/>
  );
}

export default App;
