import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ICommand } from './ICommand';

interface ICommandListProps {
  setEditingCommand: (command: ICommand | null) => void;
}

const CommandList: React.FC<ICommandListProps> = ({ setEditingCommand }) => {
  const [commands, setCommands] = useState<ICommand[]>([]);

  const fetchCommands = async () => {
    try {
      const response = await axios.get<ICommand[]>(
        'http://localhost:3000/api/v1/commands/all'
      );
      setCommands(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCommands();
  }, []);

  const handleEdit = (command: ICommand) => {
    setEditingCommand(command); // Set the editingCommand in the parent component
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/commands/${id}`);
      // Remove the deleted command from the list
      setCommands((prevCommands) =>
        prevCommands.filter((cmd) => cmd._id !== id)
      );
    } catch (error) {
      console.error('Error deleting command:', error);
    }
  };

  return (
    <div>
      <h2>List of Commands</h2>
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
            <button onClick={() => handleEdit(command)}>Edit</button>
            <button onClick={() => handleDelete(command._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandList;
