
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

