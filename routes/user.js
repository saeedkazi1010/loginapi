const express = require('express')
const router = express.Router()
const User1 = require('../models/user1')

router.get('/', async(req,res) => {
    try{
      const user = await User1.find()
      res.json(user)
    }catch{
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
        const user1 = new User1({
            username: req.body.username,
            password: req.body.password
        })
        try{
          const a1 =  await user1.save()
          res.json(a1)
        }catch(err){
            res.send('Error')
        }
})

module.exports = router