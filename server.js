const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const passport = require("passport");
const sequelize = require("./config/connection");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const { Volunteers } = require('./models')
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
const bodyParser = require('body-parser');
const Volunteer = require('./models/volunteers');
// const connectEnsureLogin = require('connect-ensure-login');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('Attempting to login..')
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
    }).catch(err => {
      console.log(err);
      done(err)
    });
  }
));



passport.serializeVolunteer(function(volunteer, done) {
  done(null, volunteer);
});

passport.deserializeUser(function(user, done) {
    done(null, volunteer);
});

app.use(express.json());
app.use(express.static("public"));
// app.use(session({ secret: "cats", 
//                   resave: true,
//                   saveUninitialized: true
//                 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(expressSession);
app.use(passport.session());
// app.use(require('./routes/index'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
// app.use('/admin', htmlRoutes)
app.use(express.static(path.join(__dirname, 'public')));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});





