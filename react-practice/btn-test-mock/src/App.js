import React from 'react';
import Button from './Button'

class App extends React.Component {
  state = {
    counter: 0
  }

  handleBtnClick = e => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return(
      <div>
        <Button onClick={this.handleBtnClick}/>
        {this.state.counter}
      </div>
    )
  }
}

export default App;
