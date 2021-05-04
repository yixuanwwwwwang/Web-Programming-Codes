const userRoutes = require('./userlog');

const constructorMethod = (app) => {
    app.use('/', userRoutes);
  
    app.use('*', (req, res) => {
      res.sendStatus(404);
    });
  };
  
  module.exports = constructorMethod;
  