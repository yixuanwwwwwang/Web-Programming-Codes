const dataRoutes = require('./data');

// const path = require('path');

const constructorMethod = (app) => {
  app.use('/', dataRoutes);
  
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});

  
};

module.exports = constructorMethod;