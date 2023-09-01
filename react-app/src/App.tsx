import './App.css'
import CommandForm from './components/CommandForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Command</h1>
      </header>
      <main>
        {/* <CommandApiComponent /> */}
        <CommandForm />
      </main>
    </div>
  )
}

export default App
