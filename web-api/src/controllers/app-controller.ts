import { Request, Response } from 'express'
import { App } from '../models/app/App'

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body

    const app = new App({
      name,
      description,
    })
    await app.save()

    res.status(201).json(app)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create App' })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const app = await App.findByIdAndDelete(id)
    if (!app) {
      return res.status(404).json({ error: 'App not found' })
    }
    res.json({ message: 'App deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete App' })
  }
}

// export const getAllApps = async (_req: Request, res: Response) => {
//   try {
//     res.json(await App.find({}, '-__v').sort({ createdAt: -1 }).exec())
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: 'Failed to fetch Apps' })
//   }
// }

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, description } = req.body

    const existingApp = await App.findById(id)

    if (!existingApp) {
      return res.status(404).json({ error: 'App not found' })
    }

    if (name) {
      existingApp.name = name
    }
    if (description) {
      existingApp.description = description
    }
    existingApp.updatedAt = new Date(Date.now())

    await existingApp.save()
    res.json(existingApp)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update App' })
  }
}
