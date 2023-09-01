import React, { useState } from 'react'
import axios from 'axios'

const CommandForm: React.FC = () => {
  const [command, setCommand] = useState({
    command: '',
    description: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCommand({ ...command, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/commands/create',
        command
      )

      // Optionally, you can handle the response here (e.g., show a success message)
      console.log('Command created:', response.data)

      // Clear the form
      setCommand({ command: '', description: '' })
    } catch (error) {
      console.error('Error creating command:', error)
    }
  }

  return (
    <div>
      <h2>Create a Command</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="command">Command:</label>
          <input
            type="text"
            id="command"
            name="command"
            value={command.command}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={command.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Create Command</button>
        </div>
      </form>
    </div>
  )
}

export default CommandForm
