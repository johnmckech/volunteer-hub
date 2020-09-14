const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const passport = require("passport");
const sequelize = require("./config/connection");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
var session = require("express-session"),
    bodyParser = require("body-parser");
const Volunteer = require('./models/volunteers');
// const connectEnsureLogin = require('connect-ensure-login');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});





passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(expressSession);
app.use(passport.session());

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, 'public')));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.use(express.urlencoded({ extended: false }));

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});





