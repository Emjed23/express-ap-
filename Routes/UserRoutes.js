const express=require('express')
const {addUser,getAll,getUSerById,updateUser,deletUser} = require('..\controllers\UserController')

const Router=express.Router()

Router.post('/addUser',addUser)
Router.get('/getuserlist',getAll)
Router.get('/getOneUser/:id',getUSerById)
Router.put('/updateUser/:id',updateUser)
Router.delete('/deletUser/:id',deletUser)

module.exports=Router