import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CommandPage from './pages/command/CommandPage'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Command App</h1>
        </header>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/commands">Command</Link>
              </li>
              <li>
                <Link to="/commands">App</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/commands/*" element={<CommandPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
