import React from 'react'
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
      <main className="App">
        <Button onClick={this.handleDeleteClick}/>
        {this.state.counter}
      </main>
      )
  }
}

export default App