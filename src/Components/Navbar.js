import React from 'react'

const Navbar = () => {
  return (
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>
          <a class="navbar-brand" href="/">
            Inbox Styleguide
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="/">Components</a>
            </li>
            <li>
              <a href="/example">Example</a>
            </li>
            <li>
              <a href="/css">CSS</a>
            </li>
            <li>
              <a href="/seeds">Seeds</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
