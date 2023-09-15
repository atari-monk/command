import { Request, Response } from 'express'
import { Command } from '../models/command/Command'

export const create = async (req: Request, res: Response) => {
  try {
    const { command, description } = req.body

    const cmd = new Command({
      command,
      description,
    })
    await cmd.save()

    res.status(201).json(cmd)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create command' })
  }
}

export const deleteCmd = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const command = await Command.findByIdAndDelete(id)
    if (!command) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' })
  }
}

export const getAllCommands = async (_req: Request, res: Response) => {
  try {
    res.json(await Command.find({}, '-__v').sort({ createdAt: -1 }).exec())
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch commands' })
  }
}

export const updateCommand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { command, description } = req.body

    const existingCommand = await Command.findById(id)

    if (!existingCommand) {
      return res.status(404).json({ error: 'Command not found' })
    }

    if (command) {
      existingCommand.command = command
    }
    if (description) {
      existingCommand.description = description
    }
    existingCommand.updatedAt = new Date(Date.now())

    await existingCommand.save()
    res.json(existingCommand)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update command' })
  }
}
