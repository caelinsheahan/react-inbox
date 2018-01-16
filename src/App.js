import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MessagesList from './Components/MessagesList'
import Toolbar from './Components/Toolbar'
import Navbar from './Components/Navbar'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: this.props.messages
    }
  }
  toggleClass = (message, class1) => {
    const index = this.state.messages.indexOf(message)
    const newMessages = this.state.messages.slice(0)
    newMessages[index][class1] = !newMessages[index][class1]
    this.setState({ messages: newMessages })
  }
  selectAll = (message, class1) => {
    const newMessages = this.state.messages.slice(0)
    let counterTrue = 0
    let counterFalse = 0
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[class1] === true) {
        counterTrue += 1
      }
      if (newMessages[class1] === false) {
        counterFalse += 1
      }
    }
    if (counterTrue === newMessages.length) {
      // all selected
      return 0
    }
    if (counterFalse > 0) {
      // some selected
      return 1
    }
    if (counterTrue === 0) {
      // none selected
      return 2
    }
    // compare the number of checked messages, if the number of checked = arr.length, make them unchecked.
    // If there are less messages then the array.length, make them checked
  }

  render() {
    return (
      <div classNameName="App">
        <Navbar />

        <div className="container">
          <Toolbar />
          <MessagesList
            messages={this.state.messages}
            toggleClass={this.toggleClass}
          />
        </div>
      </div>
    )
  }
}

export default App
