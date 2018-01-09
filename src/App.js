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
  render() {
    return (
      <div classNameName="App">
      <Navbar />

      <div className='container'>
      <Toolbar />
      <MessagesList messages = {this.state.messages}/>
      </div>
      </div>
    )
  }
}

export default App
