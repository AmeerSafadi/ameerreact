import React from 'react';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Home Page</Link>
        <Link to='/page2'>2</Link>
        <Switch>
          <Route exact path='/' component={()=>{return <h1>homePage</h1>}}></Route>
          <Route exact path='/page2' component={()=>{return <h1>Page2</h1>}}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;