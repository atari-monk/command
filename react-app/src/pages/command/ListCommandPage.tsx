import { useState, useEffect } from 'react'
import axios from 'axios'
import { ICommand } from '../../components/command/ICommand'
import './CommandPage.css'
import CommandList from '../../components/command/CommandList '
import { useNavigate } from 'react-router-dom'

function ListCommandPage() {
  const navigate = useNavigate()
  const [commands, setCommands] = useState<ICommand[]>([])

  useEffect(() => {
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
    navigate(`/commands/add?commandId=${command._id}`)
  }

  return (
    <div className="ListCommandPage">
      <CommandList
        commands={commands}
        onEdit={handleEdit}
        onDelete={() => {
          fetchCommands()
        }}
      />
    </div>
  )
}

export default ListCommandPage
