const express = require('express')
const { getGoals, getGoal, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const router = express.Router()
const {protect} =require('../middleware/authMiddleware')


router.get('/', protect, getGoals)
router.get('/:id', protect, getGoal)
router.post('/', protect, setGoal)
router.put('/:id', protect, updateGoal)
router.delete('/:id', protect, deleteGoal)

//Less lines but also less readable (For me)
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router