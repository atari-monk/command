import { Route, Routes } from 'react-router-dom'
import './CommandPage.css'
import AddCommandPage from './AddCommandPage'
import ListCommandPage from './ListCommandPage'

function CommandPage() {
  return (
    <div className="CommandPage">
      <Routes>
        <Route path="list" element={<ListCommandPage />} />
        <Route path="add" element={<AddCommandPage />} />
      </Routes>
    </div>
  )
}

export default CommandPage
