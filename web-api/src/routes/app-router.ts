import express from 'express'
import * as appController from '../controllers/app-controller'

const router = express.Router()

router.get('/all', appController.all)
router.post('/create', appController.create)
// router.get('/user', apiController.getProjects)
router
  .route('/:id')
  //.get(apiController.getProjectById)
  .patch(appController.update)
  .delete(appController.remove)

export default router
