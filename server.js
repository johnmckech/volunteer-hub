
const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// const passport = require("passport");
const sequelize = require("./config/connection");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user.js')

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne(
      {
        where: {
           username: username 
        }
      }).then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      console.log(user.password + ' vs ' + password)
      if (!user.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      done(null, user);
    }).catch(err => done(err));
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(require('./routes/login'));
// app.use(require('./config/passport'));

var session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes/login'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
=======

const express = require('express');
const db = require('./db/database');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3030;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/',function(req,res){
    var mainReq = req.body
    console.log({mainReq})
})
 
app.listen(3000)

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


