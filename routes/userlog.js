const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userData = require('./users');

router.get('/', async (req, res) => { 
    if (req.session.AuthCookie) {
         return res.redirect('/private');
    } else {
         res.render('users/login');
    }
});

router.post('/login', async (req, res) => {
    let user 
    const username = req.body.username;
    if (!req.body.username || !req.body.password) {
        return res.status(401).render("users/login", {error: "You have not entered your username and password!!!!!!!"})
    }
    for (let i = 0; i < userData.length; i++) {
        user = userData[i];
        // console.log(user);
        // console.log(username)
        
        if(req.body.username && req.body.password) {
            if (user.username == req.body.username && await bcrypt.compare(req.body.password, user.hashedPassword)) {
                req.session.AuthCookie = {
                    _id: user._id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    profession: user.profession,
                    bio: user.bio
                }
                // console.log("3")
                return res.redirect('/private')
           }  
        }
    }
    return res.status(401).render("users/login", {error: "You have not entered correct username and password!!!!!!!"})
});


router.get('/private', async (req, res) => {
    // console.log("4")
    if (req.session.AuthCookie) {
        res.render ('users/private', {xx:req.session.AuthCookie})
    } else {
        res.status(401).render("users/login", {error: "There is an error getting your information"})
    }
});


router.get('/logout', async (req, res) => {
    
    req.session.destroy();
    res.render ('users/logout', {message: "You logged out ^^"})
    return;
})

module.exports = router;