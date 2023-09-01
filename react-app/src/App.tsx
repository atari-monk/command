import './App.css'
import CommandForm from './components/CommandForm'
import CommandList from './components/CommandList '

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Command</h1>
      </header>
      <main>
        <CommandList />
        <CommandForm />
      </main>
    </div>
  )
}

export default App
