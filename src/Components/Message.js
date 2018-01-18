import React from 'react'

const Message = ({ message, toggleClass }) => {
  const readClass = message.read ? 'read' : 'unread'
  const selectedClass = message.selected ? 'selected' : ''
  const starredClass = message.starred ? 'fa-star' : 'fa-star-o'
  const labels = message.labels.map((label, idx) => (
    <span key={idx} className="label label-warning">
      {' '}
      {label}{' '}
    </span>
  ))
  return (
    <div
      className={`row message ${readClass} ${selectedClass}`}
      onClick={() => {
        toggleClass(message, 'selected')
      }}
    >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              checked={!!message.selected}
              onClick={() => {
                toggleClass(message, 'selected')
              }}
            />
          </div>
          <div
            className="col-xs-2"
            onClick={() => {
              toggleClass(message, 'starred')
            }}
          >
            <i className={`star fa ${starredClass}`} />
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labels}
        {message.subject}
      </div>
    </div>
  )
}
export default Message
