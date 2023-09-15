import express from 'express'

const router = express.Router()

//router.get('/all', apiController.getAllapis)
//router.post('/create', apiController.create)
// router.get('/user', apiController.getProjects)
router.route('/:id')
//.get(apiController.getProjectById)
//.patch(apiController.updateapi)
//.delete(apiController.deleteCmd)

export default router
