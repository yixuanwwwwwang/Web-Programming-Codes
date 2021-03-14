const express = require('express')
const router = express.Router()
const data = require('../data/aboutme')

router.get('/', async (req, res) => {
    try {
      const about = await data.aboutMe();
      res.json(about);
    } catch (e) {
      res.status(500).send();
    }
  })


module.exports = router