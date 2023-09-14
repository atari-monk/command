import express from 'express'
import * as commandController from '../controllers/command-controller'

const router = express.Router()

router.get('/all', commandController.getAllCommands)
router.post('/create', commandController.create)
// router.get('/user', commandController.getProjects)
router
  .route('/:id')
  //.get(commandController.getProjectById)
  .patch(commandController.updateCommand)
  .delete(commandController.deleteCmd)

export default router
