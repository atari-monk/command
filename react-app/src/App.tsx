import { useState } from 'react';
import './App.css'
import CommandForm from './components/CommandForm'
import CommandList from './components/CommandList '
import { ICommand } from './components/ICommand';

function App() {
  const command: ICommand = { _id: '', command: '', description: '', createdAt: new Date(Date.now())  }
  const [editingCommand, setEditingCommand] = useState<ICommand | null>(command);
  
  const handleUpdate = (updatedCommand: ICommand) => {
    // You can perform any necessary actions with the updated command here
    console.log('Updated Command:', updatedCommand);
    //const command: ICommand = { _id: '', command: '', description: '', createdAt: new Date(Date.now())  }
    setEditingCommand( null ); // Clear the form after update if needed
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Command</h1>
      </header>
      <main>
        <CommandList setEditingCommand={setEditingCommand} />
        <CommandForm initialCommand={editingCommand} onUpdate={handleUpdate}/>
      </main>
    </div>
  )
}

export default App
