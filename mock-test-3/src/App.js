import React from 'react';
import { Route } from 'react-router-dom';
import Users from './Users'
import Me from './Me'
import Test from './Test'

function App() {
  return (
    <main className='App'>
        <Route exact path='/Users' component={Users}/>
        <Route path='/Users/Me' component={Me}/>
        <Route path='/Test' component={Test}/>
    </main>
  );
}

export default App;