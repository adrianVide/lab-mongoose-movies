const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')


module.exports = router;


router.get('/celebrity', async (req, res, next) => {
  celebrity = await Celeb.find();
  res.render('celebrity/index', {celebrity}),{
    errorMessage: "Error"
  }
})


router.get('/celebrity/:id', async (req, res, next) => {
    let foundCeleb = await Celeb.findById(req.params.id)
    // console.log(foundCeleb);

    res.render('celebrity/show', foundCeleb ) 
})