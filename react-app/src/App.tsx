import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CommandPage from './pages/command/CommandPage'
import './App.css'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/commands/*" element={<CommandPage />} />
            {/* <Route path="/app/*" element={<AppPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
