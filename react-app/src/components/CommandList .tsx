import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommandForm from './CommandForm';
import ICommand from './ICommand';

const CommandList: React.FC = () => {
  const [commands, setCommands] = useState<ICommand[]>([]);
  const [selectedCommand, setSelectedCommand] = useState<ICommand | null>(null);

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
    setSelectedCommand(command);
  };

  const handleUpdate = (updatedCommand: ICommand) => {
    setCommands((prevCommands) =>
      prevCommands.map((cmd) =>
        cmd._id === updatedCommand._id ? updatedCommand : cmd
      )
    );
    setSelectedCommand(null); // Clear selected command after updating
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
      {selectedCommand ? (
        <CommandForm initialCommand={selectedCommand} onUpdate={handleUpdate} />
      ) : (
        <>
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
          <button onClick={() => setSelectedCommand(null)}>Cancel Edit</button>
        </>
      )}
    </div>
  );
};

export default CommandList;