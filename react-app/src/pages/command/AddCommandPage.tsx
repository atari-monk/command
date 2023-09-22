import { useState } from 'react'
import CommandForm from '../../components/command/CommandForm'
import { ICommand } from '../../components/command/ICommand'
import './AddCommandPage.css'

function AddCommandPage() {
  const [editingCommand, setEditingCommand] = useState<ICommand | null>(null)

  const handleCancelEdit = () => {
    setEditingCommand(null)
  }

  const handleUpdate = (updatedCommand: ICommand) => {
    console.log('Updated Command:', updatedCommand)
    setEditingCommand(null)
  }

  return (
    <div className="AddCommandPage">
      <CommandForm
        initialCommand={editingCommand}
        onUpdate={handleUpdate}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  )
}

export default AddCommandPage
