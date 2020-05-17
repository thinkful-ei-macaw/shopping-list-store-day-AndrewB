import React from 'react';
import Button from './Button';

class App extends React.Component {

state = {
  counter: 0
} // initializes the state of the given object

handleButtonClick = e => {
  this.setState({ 
    counter: this.state.counter + 1 
  })
} // changes the state with this.setState within the event handler

render() { 
  return (
    <main className='App'>
      <Button onClick={this.handleButtonClick}/>
      {this.state.counter}
    </main>
  );
} // returns what renders from the Button component with the onClick event attribute

}

export default App;