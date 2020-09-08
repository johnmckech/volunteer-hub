const express = require('express');
const db = require('./db/database');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3030;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

// Default response for any other requests(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


// Start server after DB connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`));
});
