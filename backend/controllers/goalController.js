const asyncHandler = require('express-async-handler')

// des   get goals
//route GET /api/goals
//access private

const getGoals = asyncHandler(async(req, res)=>{
    res.status(200).json ({message : 'get goals'})
})

// des   get goals
//route GET /api/goals
//access private

const setGoals = asyncHandler(async(req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
    }
    res.status(200).json({message: 'set'})
})

// des   update goals
//route PUT /api/goals/:id
//access private

const updateGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})

// des   delete goals
//route DELETE /api/goals/:id
//access private

const deleteGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `update goals ${req.params.id}`})
})



module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}