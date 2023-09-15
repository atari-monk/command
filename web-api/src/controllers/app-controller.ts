import { Request, Response } from 'express'
import { App } from '../models/app/App'

export const create = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body

    const cmd = new App({
      name,
      description,
    })
    await cmd.save()

    res.status(201).json(cmd)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create App' })
  }
}

// export const deleteCmd = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params
//     const App = await App.findByIdAndDelete(id)
//     if (!App) {
//       return res.status(404).json({ error: 'Project not found' })
//     }
//     res.json({ message: 'Project deleted successfully' })
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete project' })
//   }
// }

// export const getAllApps = async (_req: Request, res: Response) => {
//   try {
//     res.json(await App.find({}, '-__v').sort({ createdAt: -1 }).exec())
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: 'Failed to fetch Apps' })
//   }
// }

// export const updateApp = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params
//     const { App, description } = req.body

//     const existingApp = await App.findById(id)

//     if (!existingApp) {
//       return res.status(404).json({ error: 'App not found' })
//     }

//     if (App) {
//       existingApp.App = App
//     }
//     if (description) {
//       existingApp.description = description
//     }
//     existingApp.updatedAt = new Date(Date.now())

//     await existingApp.save()
//     res.json(existingApp)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update App' })
//   }
// }
