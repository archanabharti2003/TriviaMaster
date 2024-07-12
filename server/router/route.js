import {Router} from "express"
const router=Router();
import * as controller from '../controllers/controller.js'

//Question Route API
router.route('/questions')
.get(controller.getQuestions)
.post(controller.insertQuestions)
.delete(controller.dropQuestions)


//Result Route API
router.route('/result')
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)

export default router;
