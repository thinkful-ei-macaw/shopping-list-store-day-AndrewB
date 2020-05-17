import React from 'react';
import Button from './Button'

class App extends React.Component {
  state = {
    counter: 0
  }

  handleDeleteClick = e => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleDeleteClick}/>
        {this.state.counter}
      </div>
    )
  }

}

export default App;
