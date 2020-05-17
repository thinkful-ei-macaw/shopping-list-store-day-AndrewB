import React from 'react';
import { Link, Route } from 'react-router-dom'
import Users from './Users'
import Me from './Me'
import Test from './Test'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/users'>Users</Link>
          <Link to='/users/me'>Me</Link>
          <Link to='/test'>Test</Link>
        </nav>
        <main>
          <Route exact path='/users' component={Users}/>
          <Route path='/users/me' component={Me}/>
          <Route path='/test' component={Test}/>
        </main>
      </div>
    );
  }
  
}

export default App;
