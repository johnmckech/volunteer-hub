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

const Volunteer = require('./models/volunteers');
// const connectEnsureLogin = require('connect-ensure-login');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    Volunteer.findOne(
      {
        where: {
           username: username 
        }
      }).then(volunteer => {
      if (!volunteer) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      console.log(volunteer.password + ' vs ' + password)
      if (!volunteer.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      done(null, volunteer);
      }).catch(err => done(err));
  }
  ));

passport.serializeUser(function(volunteer, done) {
  done(null, volunteer);
});

passport.deserializeUser(function(volunteer, done) {
    done(null, volunteer);
});

app.use(express.json());

const session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession);
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// app.use(express.urlencoded({ extended: false }));

// Default response for any other requests(Not Found) Catch all
// app.use((req, res) => {
//     res.status(404).end();
// });





