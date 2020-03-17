const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celebrity')


module.exports = router;


router.get('/', async (req, res, next) => {
  celebrity = await Celeb.find();
  res.render('celebrity/index', {celebrity}),{
    errorMessage: "Error"
  }
})

router.get('/new', (req, res, next) => {
    res.render('celebrity/new');
});

router.post('/new', (req, res, next) => {
    let {name, occupation, catchPhrase} = req.body;
    const newCelebrity = new Celeb ({name, occupation, catchPhrase})
    newCelebrity.save()
    .then(() => {
        res.redirect('/celebrity');
    })
    .catch((err) => {console.log('error');})
})

router.get('/:id', async (req, res, next) => {
    let foundCeleb = await Celeb.findById(req.params.id)
    // console.log(foundCeleb);

    res.render('celebrity/show', foundCeleb ) 
})

router.get('/:id/delete', (req, res, next) => {
    Celeb.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/celebrity');
    })
    .catch((err) => {console.log('error');})

})

router.get('/:id/edit', async (req, res, next) => {
    let celebToEdit = await Celeb.findById(req.params.id)
    
    // console.log(celebToEdit);
    res.render('celebrity/edit', celebToEdit);
    
})

router.post('/:id/edit', (req, res, next) => {
    let {name, occupation, catchPhrase} = req.body;
    const editedCeleb = new editedCeleb ({name, occupation, catchPhrase})
    editedCeleb.save()
    .then(() => {
        res.redirect('/celebrity');
    })
    .catch((err) => {console.log('error');})
})

// router.get('/:id/edit', (req, res, next) => {
//     res.render('celebrity/edit');
// });