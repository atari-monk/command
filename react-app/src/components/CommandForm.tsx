import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ICommandFormProps } from './ICommandFormProps'
import { ICommand } from './ICommand'

const CommandForm: React.FC<ICommandFormProps> = ({
  initialCommand,
  onUpdate,
}) => {
  const [command, setCommand] = useState<ICommand | null>(initialCommand)
  const [newCommand, setNewCommand] = useState<ICommand>({
    _id: '',
    command: '',
    description: '',
    createdAt: new Date(),
  })

  useEffect(() => {
    setCommand(initialCommand)
  }, [initialCommand])

  const isEditing = !!command

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (!isEditing) {
      // If not editing, update the new command state
      setNewCommand({ ...newCommand, [name]: value })
    } else if (command) {
      // If editing, update the existing command state
      setCommand({ ...command, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('state:', isEditing, command, newCommand)
    if (isEditing) {
      try {
        const response = await axios.patch(
          `http://localhost:3000/api/v1/commands/${command?._id}`,
          command
        )

        onUpdate(response.data)

        // Reset the state for editing
        setCommand(null)
      } catch (error) {
        console.error('Error updating command:', error)
      }
    } else {
      // If not editing, it's a new command
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/commands/create',
          newCommand
        )

        onUpdate(response.data)

        // Reset the state for a new command
        setNewCommand({
          _id: '',
          command: '',
          description: '',
          createdAt: new Date(),
        })
      } catch (error) {
        console.error('Error creating command:', error)
      }
    }
  }

  return (
    <div>
      <h2>{isEditing ? 'Edit Command' : 'Create a Command'}</h2>
      {isEditing ? (
        <button onClick={() => setCommand(null)}>Cancel Edit</button>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="command">Command:</label>
          <input
            type="text"
            id="command"
            name="command"
            value={isEditing ? command?.command || '' : newCommand.command}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={
              isEditing ? command?.description || '' : newCommand.description
            }
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">
            {isEditing ? 'Update Command' : 'Create Command'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommandForm
