import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Command App</Link>
        </li>
        <li>
          <span>Command</span>
          <ul>
            <li>
              <Link to="/commands/list">List</Link>
            </li>
            <li>
              <Link to="/commands/add">Add</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>App</span>
          <ul>
            <li>
              <Link to="/app/list">List</Link>
            </li>
            <li>
              <Link to="/app/add">Add</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
