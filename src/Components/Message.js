import React from 'react'

const Message = ({ message, toggleClass }) => {
  const readClass = message.read ? 'read' : 'unread'
  const selectedClass = message.selected ? 'selected' : ''
  const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
  return (
    <div
      className={`row message ${readClass} ${selectedClass}`}
      onClick={() => {
        toggleClass(message, 'read')
      }}
    >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2" onClick={() => {
            toggleClass(message,'selected')
          }}>
            <input type="checkbox" />
          </div>
          <div className="col-xs-2" onClick={() => {
            toggleClass(message, 'starred')
          }}>
            <i className={`star fa ${starredClass}`} />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <a href="#">{message.subject}</a>
      </div>
    </div>
  )
}
export default Message
