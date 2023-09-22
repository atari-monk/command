import React from 'react'
import axios from 'axios'
import { ICommandListProps } from './ICommandListProps'

const CommandList: React.FC<ICommandListProps> = ({
  commands,
  onEdit,
  onDelete,
}) => {
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/commands/${id}`)
      onDelete(id)
    } catch (error) {
      console.error('Error deleting command:', error)
    }
  }

  return (
    <div>
      <ul>
        {commands.map((command) => (
          <li key={command._id}>
            <div>
              <strong>Command:</strong> {command.command}
            </div>
            <div>
              <strong>Description:</strong> {command.description}
            </div>
            <div>
              <strong>Created At:</strong>{' '}
              {new Date(command.createdAt).toLocaleString()}
            </div>
            <button onClick={() => onEdit(command)}>Edit</button>
            <button onClick={() => handleDelete(command._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommandList
