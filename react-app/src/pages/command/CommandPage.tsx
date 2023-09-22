import { Link, Route, Routes } from 'react-router-dom'
import './CommandPage.css'
import AddCommandPage from './AddCommandPage'
import ListCommandPage from './ListCommandPage'

function CommandPage() {
  return (
    <div className="CommandPage">
      <h2>Commands Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="list">List</Link>
          </li>
          <li>
            <Link to="add">Add</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="list" element={<ListCommandPage />} />{' '}
        {/* Render ListPage component */}
        <Route path="add" element={<AddCommandPage />} />{' '}
        {/* Render AddPage component */}
      </Routes>
    </div>
  )
}

export default CommandPage
