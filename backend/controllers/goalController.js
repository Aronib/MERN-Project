const asyncHandler = require('express-async-handler')

const Goal = require('../model/goalModel')

// des   get goals
//route GET /api/goals
//access private

const getGoals = asyncHandler(async(req, res)=>{
const goals = await Goal.find()

    res.status(200).json (goals)
})

// des   get goals
//route GET /api/goals
//access private

const setGoals = asyncHandler(async(req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
})

// des   update goals
//route PUT /api/goals/:id
//access private

const updateGoals = asyncHandler(async(req, res)=>{
    const goal= await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, 
        req.body, {
            new: true,
        })
    res.status(200).json(updateGoals)
})

// des   delete goals
//route DELETE /api/goals/:id
//access private

const deleteGoals = asyncHandler(async(req, res)=>{
    const goal = Goal.findById(req.params.id)
    
    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})



module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}