import express from 'express'
import * as commandController from '../controllers/command-controller'

const router = express.Router()

//router.get('/all', commandController.getAllProjects)
router.post('/create', commandController.createCommand)
// router.get('/user', commandController.getProjects)
// router
//   .route('/:id')
//   .get(commandController.getProjectById)
//   .patch(commandController.updateProject)
//   .delete(commandController.deleteProject)

export default router
