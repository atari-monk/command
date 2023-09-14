import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ICommand from './ICommand';
import { ICommandFormProps } from './ICommandFormProps';

const CommandForm: React.FC<ICommandFormProps> = ({ initialCommand, onUpdate }) => {
  const [command, setCommand] = useState<ICommand | null>(initialCommand);

  useEffect(() => {
    setCommand(initialCommand);
  }, [initialCommand]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (command) {
      setCommand({ ...command, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (command) {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/v1/commands/${command._id}`,
          command
        );
        onUpdate(response.data);
        setCommand(null); // Clear the form
      } catch (error) {
        console.error('Error updating command:', error);
      }
    }
  };

  return (
    <div>
      <h2>{command ? 'Edit Command' : 'Create a Command'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="command">Command:</label>
          <input
            type="text"
            id="command"
            name="command"
            value={command?.command || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={command?.description || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">{command ? 'Update Command' : 'Create Command'}</button>
        </div>
      </form>
    </div>
  );
};

export default CommandForm;