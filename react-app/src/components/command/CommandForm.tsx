import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ICommand } from './ICommand'
import { ICommandFormProps } from './ICommandFormProps'
import { useParams } from 'react-router-dom'

const CommandForm: React.FC<ICommandFormProps> = ({
  initialCommand,
  onUpdate,
  onCancelEdit, // Add onCancelEdit prop
}) => {
  const { commandId } = useParams()
  const [command, setCommand] = useState<ICommand | null>(initialCommand)
  const [newCommand, setNewCommand] = useState<ICommand>({
    _id: '',
    command: '',
    description: '',
    createdAt: new Date(),
  })
  const [isEditing, setIsEditing] = useState<boolean>(false) // Track edit state

  useEffect(() => {
    setCommand(initialCommand)
    setIsEditing(!!initialCommand && !!initialCommand._id)
  }, [initialCommand, commandId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (!isEditing) {
      setNewCommand({ ...newCommand, [name]: value })
    } else if (command) {
      setCommand({ ...command, [name]: value })
    }
  }

  const handleCancelEdit = () => {
    setCommand(null)
    setNewCommand({
      _id: '',
      command: '',
      description: '',
      createdAt: new Date(),
    })
    setIsEditing(false)
    onCancelEdit() // Call onCancelEdit prop to notify the parent component
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isEditing) {
      try {
        const response = await axios.patch(
          `http://localhost:3000/api/v1/commands/${command?._id}`,
          command
        )

        onUpdate(response.data)
        setCommand(null)
      } catch (error) {
        console.error('Error updating command:', error)
      }
    } else {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/v1/commands/create',
          newCommand
        )

        onUpdate(response.data)
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
      <h4>{isEditing ? 'Update Command' : 'Add Command'}</h4>
      {isEditing && <button onClick={handleCancelEdit}>Cancel Edit</button>}
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
          <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  )
}

export default CommandForm
