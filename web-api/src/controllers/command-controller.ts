import { Request, Response } from 'express'
import { Command } from '../models/Command'

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

/*


export const getProjects = async (req: Request, res: Response) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is missing' });
    }
    let query: any = { userId };
    const projects = await Project.find(query, { __v: 0 });
    const filteredProjects = projects.filter((project) => project.isVisible);
    res.json(filteredProjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Projects' });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ error: 'userId parameter is missing' });
    }
    const project = await Project.findOne({ _id: id, userId }, { __v: 0 });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (name) {
      project.name = name;
    }
    if (description) {
      project.description = description;
    }

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update project' });
  }
};


*/
