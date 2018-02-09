import React, { Component } from 'react'
import './App.css'
import MessagesList from './Components/MessagesList'
import Toolbar from './Components/Toolbar'
import Navbar from './Components/Navbar'
import Compose from './Components/Compose'
import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: messages,
      bulkSelect: 2
    }
  }
  newMessage = (e,subject, body) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const newMessages = this.state.messages.slice(0)
    const ID = newMessages.length + 1
    console.log(ID + newMessages);
    newMessages.push({
      id: ID,
      subject: subject,
      read: false,
      starred: false,
      labels: []
    })
    this.setState({ messages: newMessages })
  }
  toggleClass = (message, class1) => {
    console.log('in toggleClass')
    const index = this.state.messages.indexOf(message)
    const newMessages = this.state.messages.slice(0)
    newMessages[index][class1] = !newMessages[index][class1]
    this.setState({ messages: newMessages })
  }
  messageBox = () => {
    console.log('in messageBox')
    const selectAll = 0
    const selectSome = 1
    const selectNone = 2

    let countTrue = 0
    let countFalse = 0

    for (let i = 0; i < this.state.messages.length; i++) {
      const selectIt = this.state.messages[i]['selected']
      if (selectIt === true) {
        countTrue++
      } else {
        countFalse++
      }
    }

    if (countTrue > 0 && countFalse > 0) {
      return selectSome
    } else if (countTrue === this.state.messages.length) {
      return selectAll
    } else {
      return selectNone
    }
  }
  gottaCheckEmAll = () => {
    const newMessages = this.state.messages.slice(0)
    if (this.messageBox() === 0) {
      for (let i = 0; i < newMessages.length; i++) {
        newMessages[i]['selected'] = false
      }
    } else if (this.messageBox() === 1) {
      for (let i = 0; i < newMessages.length; i++) {
        newMessages[i]['selected'] = true
      }
    } else if (this.messageBox() === 2) {
      for (let i = 0; i < newMessages.length; i++) {
        newMessages[i]['selected'] = true
      }
    }
    this.setState({ messages: newMessages })
  }

  readAll = () => {
    const newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i]['selected'] === true) {
        newMessages[i]['read'] = true
      } else {
      }
    }
    this.setState({ messages: newMessages })
  }

  unreadAll = () => {
    const newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i]['selected'] === true) {
        newMessages[i]['read'] = false
      } else {
      }
    }
    this.setState({ messages: newMessages })
  }
  del = () => {
    const newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i]['selected'] === true) {
        newMessages.splice(i, 1)
      } else {
      }
    }
    this.setState({ messages: newMessages })
  }
  countUnread = () => {
    const newMessages = this.state.messages.slice(0)
    let count = 0
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i]['read'] === false) {
        count += 1
      } else {
      }
    }
    return count
  }
  addLabel = label => {
    console.log(label)
    const newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i]['labels'][0] === label) {
        newMessages[i]['labels'].splice(0, 1)
      }
      if (newMessages[i]['labels'][1] === label) {
        newMessages[i]['labels'].splice(1, 1)
      }
      if (newMessages[i]['labels'][2] === label) {
        newMessages[i]['labels'].splice(2, 1)
      } else if (
        newMessages[i]['selected'] === true &&
        newMessages[i]['labels'].includes(label) === false
      ) {
        newMessages[i]['labels'].push(label)
      } else {
      }
    }
    this.setState({ messages: newMessages })
  }
  removeLabel = label => {
    const newMessages = this.state.messages.slice(0)
    for (let i = 0; i < newMessages.length; i++) {
      if (newMessages[i]['selected'] === true) {
        if (newMessages[i]['labels'][0] === label) {
          newMessages[i]['labels'].splice(0, 1)
        }
        if (newMessages[i]['labels'][1] === label) {
          newMessages[i]['labels'].splice(1, 1)
        }
        if (newMessages[i]['labels'][2] === label) {
          newMessages[i]['labels'].splice(2, 1)
        }
      } else {
      }
    }
    this.setState({ messages: newMessages })
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({ messages: json._embedded.messages })
  }
  async pStar() {}
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Toolbar
            messageBox={this.messageBox}
            messages={this.state.messages}
            gottaCheckEmAll={this.gottaCheckEmAll}
            readAll={this.readAll}
            unreadAll={this.unreadAll}
            del={this.del}
            countUnread={this.countUnread}
            addLabel={this.addLabel}
            removeLabel={this.removeLabel}
            Compose={this.Compose}
          />
        <Compose
            newMessage={this.newMessage}
            messages={this.state.messages}
          />
          <Route path="/compose" render={Compose} />
          <MessagesList
            messages={this.state.messages}
            toggleClass={this.toggleClass}
          />
        </div>
      </div>
    )
  }
}
const messages = []

//[
//   {
//     id: 1,
//     subject:
//       "You can't input the protocol without calculating the mobile RSS protocol!",
//     read: false,
//     starred: true,
//     labels: ['dev', 'personal']
//   },
//   {
//     id: 2,
//     subject:
//       "connecting the system won't do anything, we need to input the mobile AI panel!",
//     read: false,
//     starred: false,
//     selected: false,
//     labels: []
//   },
//   {
//     id: 3,
//     subject:
//       'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
//     read: false,
//     starred: true,
//     labels: ['dev']
//   },
//   {
//     id: 4,
//     subject: 'We need to program the primary TCP hard drive!',
//     read: true,
//     starred: false,
//     selected: false,
//     labels: []
//   },
//   {
//     id: 5,
//     subject:
//       'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
//     read: false,
//     starred: false,
//     labels: ['personal']
//   },
//   {
//     id: 6,
//     subject: 'We need to back up the wireless GB driver!',
//     read: true,
//     starred: true,
//     labels: []
//   },
//   {
//     id: 7,
//     subject: 'We need to index the mobile PCI bus!',
//     read: true,
//     starred: false,
//     labels: ['dev', 'personal']
//   },
//   {
//     id: 8,
//     subject:
//       'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
//     read: true,
//     starred: true,
//     labels: []
//   }
// ]
// <router>
// <Route exact path = "/" render{() => {
// }}
export default App
