import React from 'react';
import { Link, Route } from 'react-router-dom'
import Users from './Users'
import Me from './Me'
import Test from './Test'


class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/Users'>Users</Link>
          <Link to='/Me'>Me</Link>
          <Link to='/Test'>Test</Link>
        </nav>
        <main className='App'>
          <Route exact path='/Users' component={Users}/>
          <Route path='/Me' component={Me}/>
          <Route path='/Test' component={Test}/>
        </main>
      </div>
        
    );
  }
  
}

export default App;