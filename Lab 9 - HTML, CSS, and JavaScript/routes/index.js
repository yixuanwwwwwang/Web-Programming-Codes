const checkerRoutes = require('./checker');

const constructorMethod = (app) => {
  app.use('/', checkerRoutes);

  app.use('*', (req, res) => {
    res.redirect('/checker/static');
  });
};

module.exports = constructorMethod;