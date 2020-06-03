import React from 'react';
import './App.css'
import Data from './Data';
import Nav from './Nav';
import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
   <Router>
<div>
<Nav/>
<Switch>
<Route path="/" exact component={Data}/>
<Route path="/details" exact component={Details}/>

</Switch>
</div>
   </Router>
  )
}

export default App;