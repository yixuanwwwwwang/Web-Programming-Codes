const express = require('express')
const router = express.Router()
const data = require('../data/shows')

router.get('/', async (req, res) => {
    try {
      const shows = await data.shows();
      res.json(shows);
    } catch (e) {
      res.status(500).send();
    }
  })


router.get('/:id', async (req, res) => {
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
      res.json(showsId);
    } catch (e) {
      res.status(404).json({ message: 'Not found' });
    }
  })


module.exports = router