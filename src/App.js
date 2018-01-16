import React, { Component } from 'react'
import './App.css'
import MessagesList from './Components/MessagesList'
import Toolbar from './Components/Toolbar'
import Navbar from './Components/Navbar'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: messages,
      bulkSelect: 2
    }
  }
  toggleClass = (message, class1) => {
    const index = this.state.messages.indexOf(message)
    const newMessages = this.state.messages.slice(0)
    newMessages[index][class1] = !newMessages[index][class1]
    this.setState({ messages: newMessages })
  }
  messageBox = (message, class1) => {
    const newMessages = this.state.messages.slice(0)
    let counterTrue = 0
    let counterFalse = 0
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[class1] === true) {
        counterTrue += 1
        console.log('true')
      }
      if (newMessages[class1] === false) {
        console.log('false')
        counterFalse += 1
      }
    }
    if (counterTrue === newMessages.length) {
      // all selected
      this.setState({ bulkSelect: 0 })
    }
    if (counterFalse > 0) {
      // some selected
      this.setState({ bulkSelect: 1 })
    }
    if (counterTrue === 0) {
      // none selected
      this.setState({ bulkSelect: 2 })
    }
    // compare the number of checked messages, if the number of checked = arr.length, make them unchecked.
    // If there are less messages then the array.length, make them checked
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Toolbar
            messageBox={this.messageBox}
            bulkSelect={this.state.bulkSelect}
          />
          <MessagesList
            messages={this.state.messages}
            toggleClass={this.toggleClass}
          />
        </div>
      </div>
    )
  }
}
const messages = [
  {
    id: 1,
    subject:
      "You can't input the protocol without calculating the mobile RSS protocol!",
    read: false,
    starred: true,
    labels: ['dev', 'personal']
  },
  {
    id: 2,
    subject:
      "connecting the system won't do anything, we need to input the mobile AI panel!",
    read: false,
    starred: false,
    selected: false,
    labels: []
  },
  {
    id: 3,
    subject:
      'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
    read: false,
    starred: true,
    labels: ['dev']
  },
  {
    id: 4,
    subject: 'We need to program the primary TCP hard drive!',
    read: true,
    starred: false,
    selected: false,
    labels: []
  },
  {
    id: 5,
    subject:
      'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
    read: false,
    starred: false,
    labels: ['personal']
  },
  {
    id: 6,
    subject: 'We need to back up the wireless GB driver!',
    read: true,
    starred: true,
    labels: []
  },
  {
    id: 7,
    subject: 'We need to index the mobile PCI bus!',
    read: true,
    starred: false,
    labels: ['dev', 'personal']
  },
  {
    id: 8,
    subject:
      'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
    read: true,
    starred: true,
    labels: []
  }
]

export default App
