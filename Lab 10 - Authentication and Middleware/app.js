const express = require('express');
const app = express();
const session = require('express-session');
const configRoutes = require('./routes');
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const static = express.static(__dirname + '/public');
app.use('/public', static);
app.use(
    session({
      name: 'AuthCookie',
      secret: "Secret!!!!!!!!!",
      saveUninitialized: true,
      resave: false,
      cookie: { maxAge: 60000 }
    })
  );

//Authentication

app.use('/private', (req, res, next) => {
    if (!req.session.AuthCookie) {
        return res.status(403).render("users/error", { error: "You are not logged in" });
    } else {
      next();
      return;
    }
  });

//Logging

app.use(async (req, res, next) => {

	if (req.session.AuthCookie) {
        console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (Authenticated User)`);
        next();
        return;
    } else {
        console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (Non-Authenticated User)`);
    }
    next();
    return;
});


app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});