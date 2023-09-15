import express from 'express'
import * as appController from '../controllers/app-controller'

const router = express.Router()

//router.get('/all', apiController.getAllapis)
router.post('/create', appController.create)
// router.get('/user', apiController.getProjects)
router.route('/:id')
//.get(apiController.getProjectById)
//.patch(apiController.updateapi)
//.delete(apiController.deleteCmd)

export default router
