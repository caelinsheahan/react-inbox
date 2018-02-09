import React from 'react'
import { BrowserRouter as Router, Path, Route, Link } from 'react-router-dom'
const Toolbar = ({
  messageBox,
  gottaCheckEmAll,
  unreadAll,
  readAll,
  del,
  countUnread,
  addLabel,
  removeLabel,
  Compose
}) => {
  const selectButtonClass = [
    'fa fa-check-square-o',
    'fa fa-minus-square-o',
    'fa fa-square-o'
  ]
  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{countUnread()}</span>
          unread messages
        </p>

        <Link className="btn btn-danger" to="/compose">
          <i className="fa fa-plus"/>
        </Link>

        <button className="btn btn-default" onClick={gottaCheckEmAll}>
          <i className={`${selectButtonClass[messageBox()]}`} />
        </button>

        <button className="btn btn-default" onClick={readAll}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={unreadAll}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={(e) => {
              addLabel(e.target.value)
          }}>
          <option value = ''>Apply label</option>
          <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(e) => {
              removeLabel(e.target.value)
          }}>
          <option>Remove label</option>
          <option
            value="dev"
          >
            dev
          </option>
          <option
            value="personal"
          >
            personal
          </option>
          <option
            value="gschool"
          >
            gschool
          </option>
        </select>

        <button className="btn btn-default" onClick={del}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </div>
  )
}
export default Toolbar
