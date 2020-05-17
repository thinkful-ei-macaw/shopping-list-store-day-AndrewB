import React from 'react';
import Button from './Button'

class App extends React.Component{
  
  state = {
    counter: 0
  } // initialize state of given object

  handleClick = e => {
    this.setState({
      counter: this.state.counter + 1
    })  
  } // changes the state with this.setState

  render() {
    return (
      <main className='App'>
        <Button btnClick={this.handleClick}/>
        {this.state.counter}
      </main>
    );
  }
  }
    

export default App;