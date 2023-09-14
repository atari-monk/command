import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommandForm from './components/CommandForm'
import { ICommand } from './components/ICommand'
import CommandList from './components/CommandList '
import './App.css'

function App() {
  const [commands, setCommands] = useState<ICommand[]>([])
  const [editingCommand, setEditingCommand] = useState<ICommand | null>(null)

  useEffect(() => {
    // Load the list of commands when the component mounts
    fetchCommands()
  }, [])

  const fetchCommands = async () => {
    try {
      const response = await axios.get<ICommand[]>(
        'http://localhost:3000/api/v1/commands/all'
      )
      setCommands(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleEdit = (command: ICommand) => {
    // Set the editingCommand when editing
    setEditingCommand(command)
  }

  const handleCancelEdit = () => {
    // Clear the editingCommand to cancel the edit
    setEditingCommand(null)
  }

  const handleUpdate = (updatedCommand: ICommand) => {
    // Handle updating the command, e.g., send a PATCH request to your API
    // After the update is successful, you can clear the editingCommand
    // and update the list of commands
    console.log('Updated Command:', updatedCommand)

    // Clear the editingCommand
    setEditingCommand(null)

    // Update the list of commands by fetching again or updating the state directly
    fetchCommands()
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Command</h1>
      </header> */}
      <main>
        <CommandList
          commands={commands}
          onEdit={handleEdit}
          onDelete={() => {}}
        />
        <CommandForm
          initialCommand={editingCommand}
          onUpdate={handleUpdate}
          onCancelEdit={handleCancelEdit}
        />
      </main>
    </div>
  )
}

export default App
