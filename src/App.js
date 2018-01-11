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
    let newMessages = this.state.messages.slice(0)
    newMessages[index][class1] = !newMessages[index][class1]
    this.setState({ messages: newMessages })
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
