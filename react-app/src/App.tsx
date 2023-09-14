import { useState } from 'react';
import './App.css'
import CommandForm from './components/CommandForm'
import CommandList from './components/CommandList '
import ICommand from './components/ICommand';

function App() {
  const [editingCommand, setEditingCommand] = useState<ICommand | null>(null);

  const handleUpdate = (updatedCommand: ICommand) => {
    // You can perform any necessary actions with the updated command here
    console.log('Updated Command:', updatedCommand);
    setEditingCommand(null); // Clear the form after update if needed
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Command</h1>
      </header>
      <main>
        <CommandList />
        <CommandForm initialCommand={editingCommand} onUpdate={handleUpdate}/>
      </main>
    </div>
  )
}

export default App
