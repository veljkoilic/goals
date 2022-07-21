const express = require('express')
const { getGoals, getGoal, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const router = express.Router()

router.get('/', getGoals)
router.get('/:id', getGoal)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

//Less lines but also less readable (For me)
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router