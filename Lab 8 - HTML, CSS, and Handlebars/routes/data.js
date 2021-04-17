const express = require('express')
const router = express.Router()
const data = require('../data/data')

router.get('/', async (req, res) => {
    try {
      res.render('shows/index')
    } catch (e) {
      res.status(500).send();
    }
  })

router.get('/shows/:id', async (req, res) => {
    const id = req.params.id
    if (id == null) {
      res.status(400).json({ message: 'id is not valid' })
    }
    let theid = Number(id)
    if (typeof theid !== 'number') {
      res.status(400).json({ message: 'id is not valid' })
    }
  
    if (theid < 0 || theid == 0 || theid%1 !== 0) {
      res.status(400).json({ message: 'id is not valid' })
    }
  
    try {
        const showsId = await data.getByID(req.params.id);
        res.render('shows/singleshow', {singleShow: showsId});
    } catch (e) {
        res.status(404).json({ message: 'Not found' });
    }
    })

router.post('/search', async (req,res) =>{
  
  if (!req.body.searchTerm) {
    res.status(400).render('shows/error')
    return
  }
  if (req.body.searchTerm.trim().length==0) {
    res.status(400).render("shows/error")
    return
  }
  try {
    const searchShows = await data.search(req.body.searchTerm)
    
    if (Object.keys(searchShows).length==0) {
      res.status(400).render('shows/search',{searchTerm: req.body.searchTerm, notFound:true})
    }else{
    res.render('shows/search',{searchShows: searchShows,searchTerm: req.body.searchTerm})
    }

  } catch(e){
    
    res.status(400).json({message:'e'})

  }
})

module.exports = router